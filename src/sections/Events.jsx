import React, { useState, useMemo, useEffect } from 'react';
import { events } from '../constants';
import EventCard from '../components/EventCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const monthMap = {
  january: 0, jan: 0,
  february: 1, feb: 1,
  march: 2, mar: 2,
  april: 3, apr: 3,
  may: 4,
  june: 5, jun: 5,
  july: 6, jul: 6,
  august: 7, aug: 7,
  september: 8, sep: 8, sept: 8,
  october: 9, oct: 9,
  november: 10, nov: 10,
  december: 11, dec: 11
};

const parseEventRange = (ev, currentYear) => {
  // returns { start: Date, end: Date } or null if can't parse
  if (!ev || !ev.date) return null;

  const raw = String(ev.date).trim();

  // If there's an explicit year in the ev object, use it
  const explicitYear = ev.year ? Number(ev.year) : undefined;

  // Try to find a 4-digit year inside the date string
  const yearInString = raw.match(/(20\d{2})/);
  const inferredYear = yearInString ? Number(yearInString[1]) : explicitYear;

  // Pattern: "17-19 October 2025" or "17-19 October"
  const rangeRegex = /(\d{1,2})(?:\s*-\s*(\d{1,2}))?\s+([A-Za-z]+)(?:\s+(\d{4}))?/i;
  const rangeMatch = raw.match(rangeRegex);
  if (rangeMatch) {
    const day1 = Number(rangeMatch[1]);
    const day2 = rangeMatch[2] ? Number(rangeMatch[2]) : day1;
    const monthName = rangeMatch[3].toLowerCase();
    const month = monthMap[monthName];
    const yearFromMatch = rangeMatch[4] ? Number(rangeMatch[4]) : undefined;
    const year = yearFromMatch ?? inferredYear ?? currentYear;

    if (typeof month === 'number') {
      const start = new Date(year, month, day1);
      const end = new Date(year, month, day2);
      return { start, end };
    }
  }

  // Try FF: patterns like "October 17-19 2025" or "October 17 2025"
  const altRangeRegex = /([A-Za-z]+)\s+(\d{1,2})(?:\s*-\s*(\d{1,2}))?(?:\s+(\d{4}))?/i;
  const altMatch = raw.match(altRangeRegex);
  if (altMatch) {
    const monthName = altMatch[1].toLowerCase();
    const day1 = Number(altMatch[2]);
    const day2 = altMatch[3] ? Number(altMatch[3]) : day1;
    const month = monthMap[monthName];
    const yearFromMatch = altMatch[4] ? Number(altMatch[4]) : undefined;
    const year = yearFromMatch ?? inferredYear ?? currentYear;

    if (typeof month === 'number') {
      const start = new Date(year, month, day1);
      const end = new Date(year, month, day2);
      return { start, end };
    }
  }

  // Try ISO / single date parse
  const parsed = new Date(raw);
  if (!isNaN(parsed)) {
    return { start: parsed, end: parsed };
  }

  // Fallback: if we have a year, use whole year range
  if (inferredYear) {
    const start = new Date(inferredYear, 0, 1);
    const end = new Date(inferredYear, 11, 31, 23, 59, 59);
    return { start, end };
  }

  return null;
};

const Events = () => {
  const [pastOpen, setPastOpen] = useState(false);
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const currentYear = new Date().getFullYear();

  // parsed events with start/end dates
  const parsedEvents = useMemo(() => {
    return events.map((ev) => {
      const range = parseEventRange(ev, currentYear);
      // fallback: if no parse, assign year-based span or treat as current-year single-day
      const fallbackRange = (() => {
        if (ev.year) {
          const y = Number(ev.year);
          return { start: new Date(y, 0, 1), end: new Date(y, 11, 31, 23, 59, 59) };
        }
        // fallback to current year full span
        return { start: new Date(currentYear, 0, 1), end: new Date(currentYear, 11, 31, 23, 59, 59) };
      })();
      return {
        ...ev,
        _range: range ?? fallbackRange
      };
    });
  }, [events, currentYear]);

  // upcoming/current (end date >= today)
  const upcomingEvents = useMemo(() => {
    return parsedEvents.filter((ev) => {
      const end = ev._range?.end;
      return end && end >= today;
    });
  }, [parsedEvents, today]);

  // past events (end date < today)
  const pastEvents = useMemo(() => {
    return parsedEvents.filter((ev) => {
      const end = ev._range?.end;
      return end && end < today;
    });
  }, [parsedEvents, today]);

  // group past events by year (use end year)
  const pastByYear = useMemo(() => {
    return pastEvents.reduce((acc, ev) => {
      const year = (ev._range && ev._range.end) ? ev._range.end.getFullYear() : (ev.year ?? 'Unknown');
      acc[year] = acc[year] || [];
      acc[year].push(ev);
      return acc;
    }, {});
  }, [pastEvents]);

  // simple escape-to-close for modal
  useEffect(() => {
    if (!pastOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setPastOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pastOpen]);

  return (
    <section id="events" className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
      <h1 className="max-w-screen-md b-4 text-[34px] lg:text-[40px] tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        Upcoming Events Plan
      </h1>

      <div className="max-container flex justify-center flex-wrap gap-5 lg:gap-9 py-4">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <EventCard key={event.label} {...event}/>
          ))
        ) : (
          <p className="font-ibm text-gray-600 dark:text-gray-300">No upcoming events listed.</p>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setPastOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-slate-800 text-sm font-ibm font-medium ring-1 ring-slate-900/5 dark:ring-0 hover:shadow-lg transition text-gray-900 dark:text-white"
        >
          View Past Events
        </button>
      </div>

      {/* Past events modal */}
      {pastOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setPastOpen(false)}
          />

          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-xl ring-1 ring-slate-900/10 p-6">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-ibm">Past Events</h2>
              <button
                onClick={() => setPastOpen(false)}
                aria-label="Close"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="space-y-6">
              {Object.keys(pastByYear)
                .sort((a,b) => Number(b) - Number(a))
                .map((year) => {
                  // sort events within the year descending by end date (most recent first)
                  const eventsForYear = (pastByYear[year] || []).slice().sort((a, b) => {
                    const aTime = a._range?.end?.getTime() ?? 0;
                    const bTime = b._range?.end?.getTime() ?? 0;
                    return bTime - aTime;
                  });

                  return (
                    <section key={year}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-ibm mb-2">{year}</h3>
                      <ul className="space-y-2">
                        {eventsForYear.map((ev) => (
                          <li
                            key={`${year}-${ev.label}`}
                            className="group flex items-center justify-between gap-3 p-2 rounded-lg bg-white/60 dark:bg-slate-800/60 ring-1 ring-slate-900/5 dark:ring-slate-700/20 hover:shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {ev.imgURL ? (
                                <div className="w-12 h-10 flex-shrink-0 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-700 ring-1 ring-slate-900/5 dark:ring-0">
                                  <img src={ev.imgURL.src} alt={ev.label} className="w-full h-full p-1 object-cover" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 flex-shrink-0 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-ibm text-gray-700 dark:text-white">
                                  {ev.label.charAt(0)}
                                </div>
                              )}

                              <div className="min-w-0">
                                <div className="font-ibm font-medium text-gray-900 dark:text-white truncate">{ev.label}</div>
                                <div className="font-ibm text-sm text-gray-600 dark:text-gray-300 truncate">{ev.location}</div>
                              </div>
                            </div>

                            <div className="ml-3 flex items-center">
                              <span className="inline-block px-2 py-1 text-xs font-ibm font-medium rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-white">
                                {ev.date}
                              </span>
                            </div>
                          </li>
                       ))}

                      </ul>
                    </section>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Events