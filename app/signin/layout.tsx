import { ILayoutProps } from "../layout";
import Counter from "./Counter";

function SignInLayout({ children } : ILayoutProps) {

    return (
        <div>
            <p id="header">This is Header.</p>
            <Counter />
            <div id="children">{children}</div>
            <p id="footer">This is Footer.</p>
        </div>
    );
}

export default SignInLayout;