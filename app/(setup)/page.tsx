import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();

    const server = db.server.findFirst({
        where: {
            members: {
                some: {
                    id: profile.id
                }
            },
        }
    });

    return ( 
        <div>
            <InitialModal />
        </div>
     );
};
 
export default SetupPage;