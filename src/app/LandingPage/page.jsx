"use client"

import Layout from "@/components/Layout/Layout";
import { Typography, Box } from "@mui/material";
import Link from "next/link";

export default function RootPage() {
    return (
        <Layout>
            <Box>
                <Typography>
                    Test 2
                    <Link href="/upload-product">Page 2</Link>
                </Typography>
            </Box>
        </Layout>
    )
}