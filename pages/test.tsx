import { Button } from "@mantine/core";
import Link from "next/link";

export default function Test() {
    return (
        <>
            <h1>hello</h1>
            <Button>
                <Link href="/">Back</Link>
            </Button>
        </>
    );
}