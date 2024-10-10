const Button = ({label, iconURL, dest}) => {
  return (
    <a href={dest}>
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-ibm font-medium text-lg leading-none bg-coral-red text-white border-coral-red rounded-2xl">
        {label}

        <img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>
    </a>
  )
}

export default Button