import type {FormEvent} from "react";

interface FormProps {
    getWeather: (city: { name: string }) => void;
}

const Form = ({getWeather}: FormProps) => {
    const getCity = (e: FormEvent<HTMLFormElement>) => {
        const city = e.currentTarget.city.value.trim();
        console.log(city)
        e.preventDefault()
        getWeather(city)


    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder='City name'/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;