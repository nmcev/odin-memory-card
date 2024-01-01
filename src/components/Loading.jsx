import { ring } from 'ldrs'
const LoadingAnimation = () => {
ring.register()
  return (
    <div className="flex justify-center items-center h-full row-span-5">
       <l-ring
         size="150"
         stroke="2"
         bg-opacity="0"
         speed="2" 
         color="red" 
           ></l-ring>

    </div>
  );
};

export default LoadingAnimation;
