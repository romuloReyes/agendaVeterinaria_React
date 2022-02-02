import{useState, useEfect} from 'react'; 

export const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white uppercase text-center p-2 mb-3 rounded-md">
		    {children}
		</div>
    );
};

export default Error;