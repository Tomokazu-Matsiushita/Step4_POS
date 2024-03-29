// import React from 'react';

// type InputAreaProps = {
//     onProductChange: (value: string) => void;
//   };

// const InputAria: React.FC<InputAreaProps> = ({ onProductChange }) => {
//   // フォーム送信の処理をここに記述することもできます
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // フォームのデフォルト送信動作を防ぎます
//     // 入力されたPRO_IDを取得するために、event.currentTargetを使用します
//     const proId = (event.currentTarget.elements.namedItem('pro_id') as HTMLInputElement).value;
//     onProductChange(proId);
//     console.log('Sending PRO_ID:', proId); // 実際の送信処理に置き換えてください
//   };

//   return (
// <div className="px-5 py-5 mx-auto max-w-md">
//   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//     <label htmlFor="pro_id" className="block mb-1">PRO_ID</label>
//     <input
//       type="text"
//       id="pro_id"
//       name="pro_id"
//       className="w-full p-2 border border-gray-300 rounded"
//     />
//     <button
//       type="submit"
//       className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
//     >
//       送信
//     </button>
//   </form>
// </div>
//   );
// }

// export default InputAria;

import React from 'react';

type InputAreaProps = {
    onSubmitBarcode: (barcodeValue: string) => void;
};

const InputAria: React.FC<InputAreaProps> = ({ onSubmitBarcode }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const barcodeValue = (event.currentTarget.elements.namedItem('pro_id') as HTMLInputElement).value;
        onSubmitBarcode(barcodeValue); // 親コンポーネントの関数を呼び出す
        console.log('Sending PRO_ID:', barcodeValue); // barcodeValue を使用
    };

    return (
        <div className="px-5 py-5 mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="pro_id" className="block mb-1">PRO_ID</label>
                <input
                    type="text"
                    id="pro_id"
                    name="pro_id"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
                >
                    送信
                </button>
            </form>
        </div>
    );
};

export default InputAria;