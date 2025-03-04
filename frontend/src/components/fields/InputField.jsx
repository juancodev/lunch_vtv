// Custom components
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";

function InputField(props) {
  const {
    label,
    id,
    extra,
    type,
    placeholder,
    variant,
    state,
    disabled,
    value,
    onChange,
    icon,
    showPassword,
    setShowPassword
  } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 text-black}`}
      >
        {label}
      </label>
      <InputGroup>
        <>
          <Input
            disabled={disabled}
            type={type}
            id={id}
            placeholder={placeholder}
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border p-3 text-sm outline-none text-black
              }`}
            value={value}
            onChange={onChange}
            required
          />
          {icon && (
            <>
              <InputRightElement className="top-[8px_!important]">
                {showPassword ? (
                  <BsFillEyeSlashFill
                    className="cursor-pointer dark:text-white"
                    onClick={handleClickShowPassword}
                  />
                ) : (
                  <IoEyeSharp
                    className="cursor-pointer dark:text-white"
                    onClick={handleClickShowPassword}
                  />
                )}
              </InputRightElement>
            </>
          )}
        </>
      </InputGroup>
    </div>
  );
}

export default InputField;