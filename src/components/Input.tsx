interface IInputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  label?: string
  error?: string
}

export const Input: React.FC<IInputProps> = ({label, error, ...props}) =>{
  return (
    <div>
      <span className="flex space-x-10 items-center justify-center">
        <h3 className="text-base font-medium">{label}</h3>
        <input className= "border border-[#4D4D4D] pl-2 rounded-sm w-[500px] h-11 bg-[#303030] focus:outline-none focus:border-lightBlue focus:ring-1 focus:ring-lightBlue"
          {...props}
        />
      </span>
      {error && <p className="text-[red] ml-52">{error}</p>}
    </div>
  )
}