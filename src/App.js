import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HitRatioData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://svm-server1.onrender.com/getHitRatioPiwData');  // Updated endpoint
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>Hit Ratio Data</p>
            <table>
                <thead>
                    <tr>
                        <th>Hit Ratio CI Of 10 (Window China)</th>
                        <th>Hit Ratio DI Of 10 (Window China)</th>
                        <th>Hit Ratio CI Of 30 (Window China)</th>
                        <th>Hit Ratio DI Of 30 (Window China)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.HitRatioCIOf10WindowChina}</td>
                            <td>{item.HitRatioDIOf10WindowChina}</td>
                            <td>{item.HitRatioCIOf30WindowChina}</td>
                            <td>{item.HitRatioDIOf30WindowChina}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HitRatioData;
