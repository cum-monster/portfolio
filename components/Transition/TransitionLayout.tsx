
import { useState, memo, useEffect } from "react";
import styles from "./Layout.module.css";
import NavBar from "../NavBar";

export default function TransitionLayout({ children }: any) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div>
            <NavBar />
            <div
                onTransitionEnd={() => {
                    if (transitionStage === "fadeOut") {
                        setDisplayChildren(children);
                        setTransitionStage("fadeIn");
                    }
                }}
                className={`${styles.content} ${styles[transitionStage]}`}
            >
                {displayChildren}
            </div>
        </div>
    );
}


