import Button from "./Button"
import Card from "./Card"
import profile from '/src/images/profile-picture.jpeg'
export default function Aside() {
    return(
        <>
            <div className="aside">
                <Card image={profile} title="Hi, I'm" name="Ukattah Divine" optional="CODEVINE" description="Just a Front-End Web Developer, YouTube Content Creator and a young learner here. Uhmm.. I'm Open To Opportunities, just saying.
                If You have any, I'm just a mail away" />
            </div>
   
        </>
    )
}