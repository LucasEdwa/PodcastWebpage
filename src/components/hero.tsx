import image from '../podcast.jpeg'

export default function Hero() 
{
    return (
        <>
        <div className=" text-white w-full h-[100dvh] p-12">
        <div className="flex justify-center">
                <img src={image}alt="Economia" className="w-[21rem] h-[21rem]  object-cover rounded-full " />
                </div>
            <div className="container mx-auto p-12">
                <h1 className="text-4xl font-bold text-center">Economia para todas</h1>
                <p className="text-xl mt-4 text-center">Aprenda economia de forma simples e descomplicada</p>
            </div>
        </div>

        </>
    )
}