
import Band from '../assets/band.jpg';
import Image from 'next/image';
import ButtonPrimary from './button';


const Hero = () => {
    return (
        <div className='relative'>
            <div className='absolute'>
                <Image src={Band} alt={''} />
            </div>
            <div className='absolute p-40 w-full top-36'>
                <div className='text-center'>
                    <h1>Band Manager</h1>
                    <p>Sign up those fuggin bands to play at your venue or stop being such a pussy and jam at the nearest bar now!</p>
                    <div>
                        <ButtonPrimary />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;