import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    //     AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"
import { useState } from "react";

const AlertDialogDemo = (props: { open: boolean }) => {
    // const [open,setOpen]=useState(false)
    const [open, setOpen] = useState(props.open)
    const openChange = (status: boolean) => {
        setOpen(status);
    }
    console.log('open', open);
    return (
        <AlertDialog open={true} onOpenChange={openChange}>
            {/* <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger> */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export { AlertDialogDemo };
