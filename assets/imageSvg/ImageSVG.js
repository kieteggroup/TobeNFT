import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, G, ClipPath, Rect } from 'react-native-svg';
import { WIDTH } from '../../constants';

function Logo(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={180 * WIDTH.widthScale}
            height={130 * WIDTH.widthScale}
            viewBox="0 0 180 130"
            fill="none"
            {...props}
        >
            <Path
                d="M12.408 110.132V86.406H3.902v-2.097c0-.838.292-1.55.875-2.138a2.886 2.886 0 012.127-.88h19.85v5.115H18.33v23.723h-5.922v.003zM30.155 108.119c-1.167-1.006-2.001-2.36-2.502-4.065a18.807 18.807 0 01-.751-5.323c0-1.51.207-3.018.626-4.527.418-1.509 1.07-2.767 1.96-3.773 1.445-1.677 3.308-2.67 5.589-2.977 2.278-.306 4.336-.126 6.17.545 2.113.838 3.67 2.29 4.67 4.359.945 1.844 1.42 3.995 1.42 6.455 0 1.788-.195 3.325-.585 4.612-.39 1.287-.89 2.375-1.501 3.27-1.335 1.844-3.03 2.989-5.088 3.438a11.303 11.303 0 01-5.546.126c-1.862-.422-3.35-1.134-4.462-2.14zm4.003-14.755c-1.168 1.286-1.696 3.2-1.586 5.741.11 2.543.585 4.318 1.42 5.324.333.446.918.825 1.752 1.132.834.307 1.68.335 2.543.085.862-.253 1.627-.88 2.294-1.886.667-1.006 1.028-2.626 1.085-4.862 0-2.011-.32-3.52-.96-4.526-.639-1.006-1.375-1.648-2.21-1.93a4.028 4.028 0 00-2.501-.04c-.836.25-1.447.572-1.837.962zM54.992 84.059v6.706c.61-1.063 1.5-1.93 2.668-2.6 1-.56 2.225-.838 3.67-.838 2.611 0 4.754 1.09 6.422 3.27 1.668 2.18 2.502 5.001 2.502 8.468 0 3.464-.834 6.287-2.502 8.467-.834 1.062-1.96 1.831-3.377 2.306-1.42.474-2.823.712-4.21.712-2.67 0-5.143-.699-7.424-2.097-2.279-1.398-3.42-4.08-3.42-8.047V81.209h2.835c.778 0 1.445.278 2.002.838.554.56.834 1.23.834 2.012zm9.507 14.755c0-2.012-.418-3.577-1.252-4.694-.834-1.174-1.973-1.761-3.42-1.761-1.558 0-2.754.559-3.588 1.676-.834 1.174-1.252 2.767-1.252 4.78 0 2.346.39 4.051 1.168 5.113.834 1.174 2.001 1.762 3.502 1.762 1.558 0 2.754-.588 3.588-1.762.838-1.175 1.254-2.878 1.254-5.114zM87.75 103.256h4.17c-.612 2.347-1.779 4.137-3.503 5.365-1.725 1.285-3.892 1.929-6.505 1.929-3.169 0-5.643-1.034-7.423-3.103-1.78-2.011-2.669-4.89-2.669-8.635 0-3.577.862-6.37 2.587-8.382 1.778-2.069 4.254-3.103 7.422-3.103 3.337 0 5.923 1.006 7.757 3.018 1.78 2.068 2.669 4.947 2.669 8.635v.923c0 .279-.028.475-.085.588H77.742c.057 1.733.473 3.018 1.252 3.856.724.895 1.807 1.341 3.253 1.341.945 0 1.753-.196 2.42-.588.166-.056.32-.154.46-.294l.459-.461c.056-.168.264-.392.625-.671.358-.276.871-.418 1.539-.418zm-10.008-6.538h8.506c-.11-1.51-.5-2.626-1.167-3.353-.724-.782-1.752-1.174-3.087-1.174-1.224 0-2.224.392-3.002 1.174-.777.784-1.193 1.9-1.25 3.353zM104.899 110.132v-25.82c0-.839.293-1.551.876-2.139a3.207 3.207 0 012.127-.964h3.168l11.676 19.867V81.209h5.837v28.92h-6.088l-11.761-19.867v19.867h-5.835v.003zM132.571 110.129v-25.82c0-.838.292-1.55.875-2.138a2.886 2.886 0 012.127-.88h17.846v4.947h-15.011v6.203h11.175v1.93c0 .838-.292 1.55-.875 2.137a2.885 2.885 0 01-2.127.88h-8.173v12.741h-5.837zM165.25 110.132V86.406h-8.507v-2.097c0-.838.292-1.55.876-2.138a2.884 2.884 0 012.127-.88h19.849v5.115h-8.423v23.723h-5.922v.003z"
                fill="#02FFAC"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.107 33.245V16.269l3.013-3.116V4.779L91.88 0v33.245h5.227z"
                fill="#02FFAC"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M83.798 12.333c-8.322 3.56-14.166 11.857-14.166 21.513 0 5.973 2.274 11.96 6.812 16.522l16.44 16.52 16.442-16.52a23.371 23.371 0 006.812-16.522c0-7.25-3.299-13.74-8.469-18.027l-.007 18.027c0 3.8-1.436 7.6-4.328 10.5a14.72 14.72 0 01-20.894 0 14.84 14.84 0 01-4.328-10.5V22.438l5.686-3.3v-6.805z"
                fill="#02FFAC"
            />
            <Path
                d="M105.49 33.243V16.267l-5.37-3.115v20.091h5.37zM88.674 33.243V23.26l-3.013-3.116v13.099h-5.37V23.26l5.37-3.116V8.735l5.365-3.109v27.617h-2.352z"
                fill="#fff"
            />
            <Path
                d="M80.496 35.605c1.075 5.9 6.206 10.377 12.388 10.377 6.182 0 11.314-4.477 12.388-10.377H80.496z"
                fill="#02FFAC"
            />
        </Svg>
    );
}
export function LogoOnly(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={47 * WIDTH.widthScale}
            height={67 * WIDTH.widthScale}
            viewBox="0 0 47 67"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.475 33.245V16.269l3.013-3.116V4.779L22.248 0v33.245h5.227z"
                fill="#02FFAC"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.166 12.333C5.844 15.893 0 24.19 0 33.846c0 5.973 2.274 11.96 6.812 16.522l16.441 16.52 16.441-16.52a23.371 23.371 0 006.813-16.522c0-7.25-3.3-13.74-8.47-18.027l-.006 18.027c0 3.8-1.437 7.6-4.328 10.5a14.72 14.72 0 01-20.895 0 14.84 14.84 0 01-4.328-10.5V22.438l5.686-3.3v-6.805z"
                fill="#02FFAC"
            />
            <Path
                d="M35.858 33.243V16.267l-5.37-3.115v20.091h5.37zM19.042 33.243V23.26l-3.013-3.116v13.099h-5.37V23.26l5.37-3.116V8.735l5.366-3.109v27.617h-2.353z"
                fill="#fff"
            />
            <Path
                d="M10.865 35.605c1.074 5.9 6.206 10.377 12.388 10.377 6.182 0 11.313-4.477 12.388-10.377H10.865z"
                fill="#02FFAC"
            />
        </Svg>
    );
}
function LogoHorizontal(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={109 * WIDTH.widthScale}
            height={34 * WIDTH.widthScale}
            viewBox="0 0 109 34"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_42_6317)" fill="#02FFAC">
                <Path d="M31.206 24.725V13.8h-3.917v-.965c0-.386.135-.714.403-.985.27-.27.595-.405.98-.405h9.139v2.355h-3.879v10.923h-2.726zM39.377 23.798c-.538-.463-.922-1.086-1.152-1.871a8.662 8.662 0 01-.346-2.451c0-.695.095-1.39.288-2.084.192-.695.493-1.274.902-1.738.666-.771 1.523-1.229 2.574-1.37 1.049-.141 1.996-.058 2.841.25.972.387 1.69 1.055 2.15 2.008.435.849.653 1.84.653 2.972 0 .823-.09 1.53-.269 2.123-.18.593-.41 1.094-.691 1.506-.614.849-1.395 1.376-2.343 1.583a5.205 5.205 0 01-2.553.058c-.858-.195-1.543-.522-2.054-.986zm1.843-6.793c-.538.592-.781 1.473-.73 2.643.05 1.171.269 1.988.653 2.451.154.206.423.38.807.521a1.83 1.83 0 001.17.04c.398-.117.75-.405 1.057-.869.307-.463.474-1.209.5-2.238 0-.926-.148-1.621-.442-2.084-.295-.463-.634-.759-1.018-.888a1.855 1.855 0 00-1.152-.02c-.384.116-.666.264-.845.444zM50.812 12.72v3.088c.281-.49.691-.888 1.229-1.197.46-.258 1.024-.386 1.689-.386 1.203 0 2.19.502 2.957 1.506.768 1.003 1.152 2.303 1.152 3.899 0 1.594-.384 2.895-1.152 3.898-.384.49-.902.843-1.555 1.062-.653.218-1.3.327-1.938.327a6.42 6.42 0 01-3.418-.965c-1.05-.644-1.575-1.879-1.575-3.705v-8.839h1.305c.358 0 .666.129.922.386.255.258.384.567.384.926zm4.377 6.794c0-.926-.192-1.647-.576-2.161-.384-.54-.909-.811-1.575-.811-.717 0-1.268.257-1.652.772-.384.54-.576 1.274-.576 2.2 0 1.08.18 1.866.537 2.355.384.54.922.811 1.613.811.717 0 1.268-.27 1.652-.811.386-.541.577-1.325.577-2.355zM65.894 21.56h1.92c-.281 1.08-.818 1.904-1.613 2.47-.794.59-1.791.888-2.995.888-1.458 0-2.597-.477-3.417-1.429-.82-.926-1.229-2.251-1.229-3.976 0-1.647.397-2.933 1.19-3.86.82-.952 1.96-1.428 3.418-1.428 1.537 0 2.727.463 3.572 1.39.82.952 1.229 2.277 1.229 3.975V20.016a.658.658 0 01-.04.27h-6.642c.026.798.217 1.39.576 1.776.333.412.832.617 1.498.617.435 0 .807-.09 1.114-.27a.55.55 0 00.212-.136l.211-.212c.026-.078.122-.18.288-.31.165-.127.401-.192.708-.192zm-4.607-3.011h3.916c-.05-.695-.23-1.209-.537-1.544-.334-.36-.807-.54-1.422-.54-.563 0-1.024.18-1.382.54-.358.361-.55.875-.575 1.544zM73.79 24.725V12.837c0-.386.135-.714.403-.985.27-.27.596-.418.98-.444h1.459l5.375 9.148v-9.148h2.688v13.316h-2.803l-5.415-9.148v9.148H73.79v.001zM86.53 24.724V12.836c0-.386.135-.714.404-.985.27-.27.595-.405.98-.405h8.216v2.278h-6.912v2.856h5.146v.888c0 .386-.135.714-.403.985-.27.27-.596.405-.98.405h-3.763v5.866h-2.687zM101.577 24.725V13.8h-3.916v-.965c0-.386.134-.714.403-.985.269-.27.595-.405.979-.405h9.139v2.355h-3.878v10.923h-2.727z" />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.65 15.307V7.49l1.387-1.434V2.2L10.243 0v15.307h2.407z"
                fill="#02FFAC"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.522 5.678A10.771 10.771 0 000 15.584c0 2.75 1.047 5.506 3.137 7.606l7.57 7.607 7.569-7.607a10.76 10.76 0 003.137-7.606 10.76 10.76 0 00-3.9-8.3l-.003 8.3a6.82 6.82 0 01-1.993 4.834 6.777 6.777 0 01-9.62 0 6.833 6.833 0 01-1.992-4.834V10.33l2.618-1.519V5.678z"
                fill="#02FFAC"
            />
            <Path
                d="M16.51 15.306V7.49l-2.473-1.435v9.25h2.473zM8.767 15.306v-4.597L7.38 9.275v6.03H4.908V10.71L7.38 9.275V4.022l2.47-1.431v12.715H8.767z"
                fill="#fff"
            />
            <Path
                d="M5.002 16.393c.495 2.717 2.858 4.778 5.704 4.778 2.847 0 5.21-2.061 5.704-4.778H5.002z"
                fill="#02FFAC"
            />
            <Defs>
                <ClipPath id="clip0_42_6317">
                    <Path fill="#fff" transform="translate(25.493 2.763)" d="M0 0H82.8757V30.7975H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
export function IconToken(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15 * WIDTH.widthScale}
            height={13 * WIDTH.widthScale}
            viewBox="0 0 15 13"
            fill="none"
            {...props}
        >
            <Path
                d="M7.5 2.24c.976 0 1.843.426 2.428 1.086l1.474-.98A4.997 4.997 0 007.5.492c-1.582 0-2.97.703-3.88 1.833l1.474.98A3.204 3.204 0 017.5 2.239z"
                fill="url(#paint0_linear_1_7395)"
            />
            <Path
                d="M7.5 8.526a3.235 3.235 0 01-2.427-1.087l-1.43.96c.15.17.324.34.498.532l3.403 3.346 3.533-3.517c.108-.106.217-.234.325-.362l-1.452-.98A3.226 3.226 0 017.5 8.526z"
                fill="url(#paint1_linear_1_7395)"
            />
            <Path
                d="M4.292 5.372c0-.533.13-1.044.39-1.492L3.208 2.9a4.827 4.827 0 00-.694 2.472c0 .98.239 1.748.694 2.45l1.452-.98a3.286 3.286 0 01-.368-1.47z"
                fill="url(#paint2_linear_1_7395)"
            />
            <Path
                d="M11.814 2.921l-1.474.98c.238.448.368.938.368 1.471a3.25 3.25 0 01-.347 1.45l1.474.98c.456-.725.672-1.513.672-2.43a5.03 5.03 0 00-.693-2.45z"
                fill="url(#paint3_linear_1_7395)"
            />
            <Path
                d="M7.5 3.965c.78 0 1.43.64 1.43 1.407 0 .788-.65 1.406-1.43 1.406-.802 0-1.43-.64-1.43-1.406 0-.768.65-1.407 1.43-1.407z"
                fill="url(#paint4_linear_1_7395)"
            />
            <Path
                d="M13.895 1.515A7.36 7.36 0 0115 5.373a7.229 7.229 0 01-1.105 3.835l-1.496-1.001a5.46 5.46 0 00.78-2.834 5.41 5.41 0 00-.802-2.856l1.518-1.002zM1.105 9.251A7.378 7.378 0 010 5.373c0-1.407.412-2.75 1.127-3.858l1.496 1.002a5.372 5.372 0 00-.824 2.856c0 1.044.304 2.024.802 2.855L1.105 9.251z"
                fill="url(#paint5_linear_1_7395)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_7395"
                    x1={7.51101}
                    y1={0.491943}
                    x2={7.51101}
                    y2={3.32628}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_7395"
                    x1={7.52215}
                    y1={7.41785}
                    x2={7.52215}
                    y2={12.2767}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_1_7395"
                    x1={3.59798}
                    y1={2.90009}
                    x2={3.59798}
                    y2={7.82288}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_1_7395"
                    x1={11.4237}
                    y1={2.92145}
                    x2={11.4237}
                    y2={7.80162}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_1_7395"
                    x1={7.49997}
                    y1={3.96509}
                    x2={7.49997}
                    y2={6.77811}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_1_7395"
                    x1={7.5}
                    y1={1.51526}
                    x2={7.5}
                    y2={9.25107}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#DDD" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

function QrCode(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={180 * WIDTH.widthScale}
            height={180 * WIDTH.widthScale}
            viewBox="0 0 180 180"
            fill="none"
            {...props}
        >
            <Path d="M22.5 22.5H45V45H22.5V22.5z" fill="#fff" />
            <Path d="M67.5 0v67.5H0V0h67.5zM56.25 11.25h-45v45h45v-45zM45 135H22.5v22.5H45V135z" fill="#fff" />
            <Path
                d="M67.5 112.5V180H0v-67.5h67.5zm-56.25 11.25v45h45v-45h-45zM135 22.5h22.5V45H135V22.5z"
                fill="#fff"
            />
            <Path
                d="M112.5 0v67.5H180V0h-67.5zm56.25 11.25v45h-45v-45h45zm-78.75 0V0h11.25v22.5H90V45H78.75V11.25H90zm0 56.25V45h11.25v22.5H90zM67.5 90V78.75h11.25V67.5H90V90h11.25V78.75h56.25V90h-45v11.25H78.75V90H67.5zm0 0v11.25h-45V90H11.25v11.25H0v-22.5h33.75V90H67.5zM180 101.25h-11.25v-22.5H180v22.5zm-11.25 0H157.5v22.5H180V112.5h-11.25v-11.25zm-45 0h22.5v11.25H135v11.25h-11.25v-22.5zm22.5 33.75v-11.25H135V135h-11.25v11.25h-22.5v11.25H135V135h11.25zm0 0H180v11.25h-22.5v11.25h-11.25V135zm-45-11.25V135h11.25v-22.5H78.75v11.25h22.5z"
                fill="#fff"
            />
            <Path d="M78.75 135H90v33.75h45V180H78.75v-45zM180 157.5V180h-33.75v-11.25h22.5V157.5H180z" fill="#fff" />
        </Svg>
    );
}
function IconWallet(props) {
    return (
        <Svg
            width={26 * WIDTH.widthScale}
            height={19 * WIDTH.widthScale}
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.827 16.811c0 1.2-.79 2.174-1.763 2.174H2.224c-.973-.002-1.763-.973-1.763-2.174V2.173C.46.973 1.25 0 2.224 0h19.84c.973 0 1.763.973 1.763 2.173v14.638z"
                fill="#fff"
            />
            <Path
                d="M26 11.2c0 1.007-.77 1.824-1.718 1.824h-8.305c-.948 0-1.718-.817-1.718-1.825V7.787c0-1.007.77-1.824 1.718-1.824h8.305c.948 0 1.718.815 1.718 1.824V11.2z"
                fill="#E80274"
            />
        </Svg>
    );
}
function IconProfile(props) {
    return (
        <Svg
            width={20 * WIDTH.widthScale}
            height={21 * WIDTH.widthScale}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.516 14.739H4.484C2.01 14.739 0 16.609 0 18.914v1.54h20v-1.54c0-2.306-2.005-4.175-4.484-4.175z"
                fill="#E80274"
            />
            <Path d="M15.379 7.116A5.447 5.447 0 104.624 5.377 5.447 5.447 0 0015.38 7.116z" fill="#fff" />
        </Svg>
    );
}
function IconSwap(props) {
    return (
        <Svg
            width={21 * WIDTH.widthScale}
            height={21 * WIDTH.widthScale}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.245 3.41A10.5 10.5 0 000 10.5h1.969A8.532 8.532 0 0116.85 4.805l-1.757 1.757L21 7.875l-1.313-5.907-1.442 1.443zM19.031 10.5A8.532 8.532 0 014.15 16.195l1.757-1.757L0 13.125l1.313 5.907 1.442-1.443A10.5 10.5 0 0021 10.5h-1.969z"
                fill="#fff"
            />
            <Path d="M12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#E80274" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM10.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="#E50374"
            />
        </Svg>
    );
}
export function IconNFT(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={29 * WIDTH.widthScale}
            height={20 * WIDTH.widthScale}
            viewBox="0 0 29 20"
            fill="none"
            {...props}
        >
            <Path
                d="M26.636 0H1.492C.7 0 .057.597.057 1.333V18.37c0 .736.642 1.333 1.435 1.333h25.144c.793 0 1.436-.597 1.436-1.333V1.333C28.072.597 27.428 0 26.636 0z"
                fill="#fff"
            />
            <Path
                d="M13.6 12.74l-2.508-3.979c-.323-.515-1.133-.515-1.46 0L2.2 16.724c-.324.515.081 1.158.728 1.158h11.199v-4.302l-.528-.839zM26.026 16.269L21.462 5.203c-.45-.716-1.575-.716-2.03 0l-3.488 5.533-1.804 2.862-.008-.016v4.298h11.015c.9-.004 1.33-.896.88-1.611zM6.26 2.245A2.428 2.428 0 003.834 4.67 2.428 2.428 0 006.26 7.095 2.428 2.428 0 008.685 4.67 2.428 2.428 0 006.26 2.245z"
                fill="#E80274"
            />
        </Svg>
    );
}

function IconSetting(props) {
    return (
        <Svg
            width={24 * WIDTH.widthScale}
            height={24 * WIDTH.widthScale}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_42_4231)">
                <Path
                    d="M7.311 6.449a7.065 7.065 0 00-1.683 2.188 7.028 7.028 0 001.043 7.777c2.586 2.928 7.075 3.216 10.019.645a7.033 7.033 0 00.648-9.962c-2.588-2.927-7.08-3.22-10.027-.648zm8.236 9.317a5.385 5.385 0 01-3.897 1.32 5.403 5.403 0 01-3.694-1.808 5.323 5.323 0 01.497-7.544 5.383 5.383 0 013.907-1.35 5.4 5.4 0 013.715 1.808 5.338 5.338 0 011.324 3.896 5.322 5.322 0 01-1.852 3.678z"
                    fill="#E80274"
                />
                <Path
                    d="M23.956 12.775c.04-.466.052-.935.038-1.403a11.232 11.232 0 00-.125-1.355l-2.375-.391-.805-2.235 1.582-1.804a11.908 11.908 0 00-1.696-2.182L18.42 4.479l-1.974-1.334.213-2.389a11.934 11.934 0 00-2.584-.755l-1.12 2.125-2.388.055L9.342.113c-.906.205-1.785.514-2.619.92l.352 2.372-1.898 1.443L2.966 3.9a11.853 11.853 0 00-1.571 2.273l1.682 1.71-.678 2.275-2.35.527c-.044.479-.059.96-.045 1.44.017.44.057.88.12 1.316l2.376.398.798 2.236-1.593 1.8A12.078 12.078 0 003.4 20.067l2.158-1.068 1.97 1.34-.224 2.387c.855.362 1.748.625 2.663.784l1.112-2.13 2.387-.065 1.23 2.063c.905-.209 1.783-.521 2.616-.93l-.36-2.37 1.891-1.452 2.214.943c.61-.696 1.137-1.46 1.569-2.278l-1.692-1.704.67-2.282 2.351-.53zm-6.76 4.861c-3.263 2.851-8.24 2.532-11.107-.716a7.786 7.786 0 01-1.156-8.623A7.833 7.833 0 016.8 5.872c3.267-2.85 8.248-2.524 11.116.72a7.795 7.795 0 01-.718 11.045h-.002z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_42_4231">
                    <Path fill="#fff" d="M0 0H24V23.5102H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
export function HexagonSelect(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={179 * WIDTH.widthScale}
            height={161 * WIDTH.widthScale}
            viewBox="0 0 179 161"
            fill="none"
            {...props}
        >
            <Path
                d="M138.872 149.595l-.004.006-.004.007c-2.952 5.191-8.496 8.392-14.498 8.392H54.634c-6.002 0-11.546-3.201-14.498-8.392l-.004-.007-.004-.006-34.902-60.67-.003-.004a17.06 17.06 0 010-16.842l.003-.005 34.902-60.669.004-.006.004-.007C43.088 6.202 48.632 3 54.634 3h69.732c6.002 0 11.546 3.201 14.498 8.392l.004.007.004.006 34.902 60.67.004.005a17.061 17.061 0 01-.004 16.846l-34.902 60.669z"
                fill="url(#paint0_linear_102_49)"
                fillOpacity={0.9}
                stroke="#fff"
                strokeWidth={6}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_102_49"
                    x1={89.5}
                    y1={161}
                    x2={89.5}
                    y2={-0.0000021619}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F40074" />
                    <Stop offset={1} stopColor="#502D9F" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function Hexagon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={179 * WIDTH.widthScale}
            height={161 * WIDTH.widthScale}
            viewBox="0 0 179 161"
            fill="none"
            {...props}
        >
            <Path
                d="M54.634 161h69.732c7.069 0 13.615-3.771 17.106-9.909l34.91-60.682a20.06 20.06 0 000-19.818l-34.91-60.682C137.981 3.771 131.435 0 124.366 0H54.634c-7.07 0-13.615 3.77-17.106 9.909L2.618 70.591a20.06 20.06 0 000 19.818l34.91 60.682C41.019 157.229 47.565 161 54.634 161z"
                fill="url(#paint0_linear_42_5527)"
                fillOpacity={0.9}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_42_5527"
                    x1={89.5}
                    y1={161}
                    x2={89.5}
                    y2={-0.0000021619}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#750D68" />
                    <Stop offset={1} stopColor="#180346" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function MultiHexagon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={339 * WIDTH.widthScale}
            height={329 * WIDTH.widthScale}
            viewBox="0 0 339 329"
            fill="none"
            {...props}
        >
            <Path
                d="M154.838 39.271L68.02 89.396c-8.801 5.081-14.253 14.459-14.208 24.574l-.051 100.285a28.584 28.584 0 0014.177 24.557l86.876 50.098c8.737 5.097 19.584 5.064 28.386-.018l86.817-50.124c8.802-5.081 14.254-14.459 14.209-24.574l.051-100.285a28.583 28.583 0 00-14.178-24.557l-86.875-50.098c-8.738-5.097-19.585-5.064-28.386.017z"
                fill="url(#paint0_linear_110_37)"
                fillOpacity={0.3}
            />
            <Path
                d="M217.905 51.96h-97.527c-9.887 0-19.042 5.262-23.924 13.827l-48.825 84.681a27.94 27.94 0 000 27.656l48.825 84.68c4.882 8.566 14.037 13.828 23.924 13.828h97.527c9.887 0 19.042-5.262 23.924-13.828l48.825-84.68a27.942 27.942 0 000-27.656l-48.825-84.68c-4.882-8.566-14.037-13.828-23.924-13.828z"
                fill="url(#paint1_linear_110_37)"
                fillOpacity={0.3}
            />
            <Path
                d="M209.569 71.217h-80.856c-8.197 0-15.786 4.36-19.834 11.458L68.4 152.838a23.138 23.138 0 000 22.915l40.479 70.164c4.048 7.097 11.637 11.457 19.834 11.457h80.856c8.197 0 15.787-4.36 19.835-11.457l40.478-70.164a23.138 23.138 0 000-22.915l-40.478-70.163c-4.048-7.098-11.638-11.458-19.835-11.458z"
                fill="url(#paint2_linear_110_37)"
                fillOpacity={0.3}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_110_37"
                    x1={111.429}
                    y1={64.3336}
                    x2={226.609}
                    y2={263.83}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#562E9E" />
                    <Stop offset={1} stopColor="#EB2C7C" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_110_37"
                    x1={169.141}
                    y1={51.9597}
                    x2={169.141}
                    y2={276.632}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#562E9E" />
                    <Stop offset={1} stopColor="#EB2C7C" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_110_37"
                    x1={169.141}
                    y1={71.2173}
                    x2={169.141}
                    y2={257.374}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#562E9E" />
                    <Stop offset={1} stopColor="#EB2C7C" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function IconDropDown({ color = '#fff', style, width = 11 * WIDTH.widthScale, height = 8 * WIDTH.widthScale }) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 11 8" fill="none" {...style}>
            <Path
                d="M10.92.66L5.79 7.846a.348.348 0 01-.578 0L.08.66C-.11.392.06 0 .369 0h10.262c.308 0 .48.392.29.66z"
                fill={color}
            />
        </Svg>
    );
}

export function IconDeposit(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22 * WIDTH.widthScale}
            height={23 * WIDTH.widthScale}
            viewBox="0 0 22 23"
            fill="none"
            {...props}
        >
            <Path
                d="M19.704 13.591v7.847H1.314v-7.846h18.39zm1.314-.98H0v9.808h21.018V12.61z"
                fill="url(#paint0_linear_1_7463)"
            />
            <Path
                d="M10.509 0l6.305 10.93h-3.152v7.285H7.356V10.93H4.204L10.509 0z"
                fill="url(#paint1_linear_1_7463)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_7463"
                    x1={10.5088}
                    y1={12.6106}
                    x2={10.5088}
                    y2={22.4189}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCC" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_7463"
                    x1={10.5089}
                    y1={0}
                    x2={10.5089}
                    y2={18.2153}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCC" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function IconWithdraw(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22 * WIDTH.widthScale}
            height={23 * WIDTH.widthScale}
            viewBox="0 0 22 23"
            fill="none"
            {...props}
        >
            <Path
                d="M19.704 13.591v7.847H1.314V13.59h18.39zm1.314-.98H0v9.807h21.018V12.61z"
                fill="url(#paint0_linear_1_7471)"
            />
            <Path
                d="M10.509 18.215L4.203 7.286h3.153V0h6.305v7.286h3.153l-6.305 10.93z"
                fill="url(#paint1_linear_1_7471)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_7471"
                    x1={10.5088}
                    y1={12.6102}
                    x2={10.5088}
                    y2={22.4184}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E4C0FC" />
                    <Stop offset={1} stopColor="#DEAECB" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_7471"
                    x1={10.5087}
                    y1={18.2153}
                    x2={10.5087}
                    y2={0.0000133514}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E4C0FC" />
                    <Stop offset={1} stopColor="#DEAECB" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function IconTransfer(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23 * WIDTH.widthScale}
            height={23 * WIDTH.widthScale}
            viewBox="0 0 23 23"
            fill="none"
            {...props}
        >
            <Path d="M5.604 9.207a3.603 3.603 0 100-7.206 3.603 3.603 0 000 7.206z" fill="url(#paint0_linear_1_7479)" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.604 2.501a3.103 3.103 0 100 6.206 3.103 3.103 0 000-6.206zM1.5 5.604a4.103 4.103 0 118.206 0 4.103 4.103 0 01-8.206 0z"
                fill="url(#paint1_linear_1_7479)"
            />
            <Path
                d="M16.413 20.017a3.603 3.603 0 100-7.206 3.603 3.603 0 000 7.206z"
                fill="url(#paint2_linear_1_7479)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.413 13.31a3.103 3.103 0 100 6.207 3.103 3.103 0 000-6.206zm-4.103 3.104a4.103 4.103 0 118.206 0 4.103 4.103 0 01-8.206 0z"
                fill="url(#paint3_linear_1_7479)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.237 10.584a.5.5 0 01.487-.022l3.503 1.751a.5.5 0 01-.448.895l-2.745-1.373c.42 5.141 4.725 9.183 9.975 9.183a.5.5 0 110 1C4.929 22.018 0 17.089 0 11.008a.5.5 0 01.237-.424z"
                fill="url(#paint4_linear_1_7479)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.51.5a.5.5 0 01.5-.5c6.08 0 11.008 4.929 11.008 11.009a.5.5 0 01-.724.447l-3.503-1.751a.5.5 0 11.448-.895l2.745 1.373C20.564 5.042 16.26 1 11.01 1a.5.5 0 01-.5-.5z"
                fill="url(#paint5_linear_1_7479)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_7479"
                    x1={5.60393}
                    y1={2.0011}
                    x2={5.60393}
                    y2={9.20701}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_7479"
                    x1={5.60393}
                    y1={1.5011}
                    x2={5.60393}
                    y2={9.70701}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_1_7479"
                    x1={16.4128}
                    y1={12.8106}
                    x2={16.4128}
                    y2={20.0165}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_1_7479"
                    x1={16.4128}
                    y1={12.3106}
                    x2={16.4128}
                    y2={20.5165}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_1_7479"
                    x1={5.75442}
                    y1={10.5088}
                    x2={5.75442}
                    y2={22.0176}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_1_7479"
                    x1={16.2637}
                    y1={0}
                    x2={16.2637}
                    y2={11.5088}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DFAFCD" />
                    <Stop offset={1} stopColor="#DFAFCD" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
export function IconX(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props?.style?.width ?? 17 * WIDTH.widthScale}
            height={props?.style?.height ?? 17 * WIDTH.widthScale}
            viewBox="0 0 17 17"
            fill="none"
            {...props}
        >
            <Rect
                width={props?.style?.width ?? 17 * WIDTH.widthScale}
                height={props?.style?.height ?? 17 * WIDTH.widthScale}
                rx={3}
                fill={props?.style?.backgroundColor ?? '#F40074'}
            />
            <Path d="M13.5 4L4 13.5M4 4l9.5 9.5" stroke={props?.style?.color ?? '#fff'} />
        </Svg>
    );
}
export { QrCode, IconWallet, IconProfile, IconSwap, IconSetting, LogoHorizontal };
export default Logo;
