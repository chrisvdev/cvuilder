import Button from "./ui/Button";
import Section from "./ui/Section";
import logInWith from "@/firebase/auth/log_in_with";
import googleProvider from "@/firebase/auth/google_provider";
import githubProvider from "@/firebase/auth/github_provider";

export default function Login() {
  return (
    <Section>
      <h1 className="text-5xl font-black">CVuilder</h1>
      <div className="flex flex-col justify-center items-center gap-6">
        <Button onClick={() => logInWith(googleProvider)}>
          Login with Google
        </Button>
        <Button onClick={() => logInWith(githubProvider)}>
          Login with GitHub
        </Button>
      </div>
      <p className="text-center max-w-2xl mx-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
        mollitia repellendus, earum sint quaerat. Ipsa sed labore nesciunt
        molestiae eius non, quam facilis, minima quae consequuntur architecto,
        minus est.
      </p>
    </Section>
  );
}
