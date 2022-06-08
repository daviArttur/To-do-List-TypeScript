import React, { ChangeEvent } from 'react'

type Props = 'string' | 'number';

const useForm = (props: Props) => {

  const [content, setContent] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');
  
  function onChange({target}: ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  function cleanValue() {
    setValue('');
  }
  
  return {
    content,
    onChange,
    setContent,
    value,
    setValue,
    cleanValue
  }  
}

export default useForm