import Layout from "../components/Layout/Layout";
import Link from 'next/link'

function About() {
    return (
        <Layout>
            <div>About</div>
            <Link href="/">Home</Link>
        </Layout>
    );
}

export default About;