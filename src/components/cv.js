export default function CvDoc({ generalInfo, educationInfo, professionalInfo }) {
    return (
        <>
        <h2>{generalInfo.name}</h2>
        <h3>{generalInfo.email}</h3>
        <p>{generalInfo.city}</p>
        <p>{generalInfo.phone}</p>
        <hr />
        <p>{educationInfo.degree}</p>
        <p>{educationInfo.school}</p>
        <p>{educationInfo.city}</p>
        <p>{educationInfo.country}</p>
        <hr />
        <p>{professionalInfo.jobTitle}</p>
        <p>{professionalInfo.company}</p>
        </>
    )
}