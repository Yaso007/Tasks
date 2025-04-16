export function UserCard({name,email,role}){
    return<div style={{
        backgroundColor:"wheat",
        margin:"10px",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"0 4px 12px",
        textAlign:"center"

      }} >
        <p>
            Username: {name}
        </p>
        <p>
            Email: {email}
        </p>
        <p>
            Role: {role}
        </p>
    </div>
}