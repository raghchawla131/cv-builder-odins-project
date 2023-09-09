export default function CvDoc({ generalInfo }) {
    return (
        <>
        <h2>{generalInfo.name}</h2>
        <h3>{generalInfo.email}</h3>
        <p>{generalInfo.city}</p>
        <p>{generalInfo.phone}</p>
        </>
    )
}