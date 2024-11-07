export default function UserProfile({params}:any){
    return(
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">    
                <hr />
                <p className="text-4xl text-white">Profile 
                    <span className="p-2 ml-2 rounded bg-[#ffa31a] text-black">{params.id} </span></p>
            </div>
        </div>
    )
}