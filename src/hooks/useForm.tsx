import React, { ChangeEvent } from 'react'

type Props = 'string' | 'number';

const useForm = (props: Props) => {

  const [content, setContent] = React.useState<string | number>('Vazio');
    
  function onChange({target}: ChangeEvent<HTMLInputElement>) {

    if(props === 'number') {
      console.log(props)
      setContent(Number(target.value));
    } else {
      setContent(target.value);
    }
  }
  
  return {
    content,
    onChange
  }  
}

export default useForm