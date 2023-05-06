
export const loadContract = async()=>{
    const res = await fetch(`/contracts/MultiAuction.json`);
    const Artifact = await res.json();
    return Artifact
}