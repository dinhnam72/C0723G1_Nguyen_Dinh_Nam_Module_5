import axios from "axios";
export default function Covid({covid}) {
    return (
        <>
            <h1>Danh sách thông tin Covid</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {covid.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.active}</td>
                        <td>{item.recovered}</td>
                        <td>{item.deaths}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export const getStaticProps = async()=> {
    const response =  await axios.get("http://localhost:8080/covid19s");
    // const data = response.data
    return {
        props: {
            covid : response.data
        }
    }
}