import React, { useEffect, useState } from 'react';

export const UrlShortener = () => {
    const [shortUrl, setShortUrl] = useState([]);
    const [longUrl, setLongUrl] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BASE_URL}/shortUrls`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullUrl: longUrl }),
        }).then((res) => res.json())
            .then((data) => {
                setShortUrl(prevUrls => [...prevUrls, data]);
                setLongUrl('');
            })
    }

    useEffect(() => {
        
        fetch(`${process.env.REACT_APP_BASE_URL}/shortUrls`)
            .then((res) => res.json())
            .then((data) => setShortUrl(data));
    }, []);

 
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="p-8 w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="w-full" method='POST'>
                            <h2 className="block text-gray-900 text-lg font-bold mb-4 text-center">URL Shortener</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                                    URL
                                </label>
                                <input onChange={(e) => setLongUrl(e.target.value)} value={longUrl} type="url" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="url" placeholder="Enter Long URL" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" type="submit">
                                    Shorten
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="p-8 w-full md:w-1/2">
                        <div className="mt-4 h-64 overflow-auto">
                            {shortUrl.map((url, index) => (
                                <div key={index} className="p-4 mt-2 mb-4 bg-gray-100 rounded-lg shadow-md ">
                                <p className="text-gray-700 text-lg font-semibold">Original URL :</p>
                                <p className="text-gray-700 text-sm overflow-ellipsis overflow-hidden">{url.full}</p>
                                <p className="text-gray-700 text-lg font-semibold mt-2">Shortened URL :</p>
                                <a href={url.full} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {url.short}
                                </a>
                        </div>
))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};