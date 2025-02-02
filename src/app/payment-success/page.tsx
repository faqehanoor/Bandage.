"use client"

const PaymentSuccess = () => {
    return (
        <div className="text-center w-full">
            <h1 className="text-4xl font-bold px-10 py-20">Payment Successful</h1>
            <p className="text-lg mt-2">Your transaction has been completed successfully.</p>
            <button 
                onClick={() => window.location.href = "/"} 
                className="mt-5 px-4 py-2 bg-blue-600 text-white rounded">
                Go to Home
            </button>
        </div>
    );
};

export default PaymentSuccess;
