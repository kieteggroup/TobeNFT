import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, G, ClipPath } from 'react-native-svg';

function Logo(props) {
    return (
        <Svg width={173} height={80} viewBox="0 0 173 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M86.135 8.85c4.94 0 9.33 2.158 12.294 5.503l7.465-4.964C101.283 3.669 94.148 0 86.135 0S71.097 3.561 66.487 9.28l7.464 4.965C76.915 10.9 81.306 8.85 86.135 8.85z"
                fill="url(#paint0_linear_1_1312)"
            />
            <Path
                d="M86.135 40.684A16.38 16.38 0 0173.84 35.18l-7.245 4.856c.768.864 1.647 1.727 2.525 2.698l17.233 16.943 17.892-17.806c.549-.54 1.098-1.187 1.647-1.835l-7.355-4.964c-2.963 3.454-7.464 5.612-12.403 5.612z"
                fill="url(#paint1_linear_1_1312)"
            />
            <Path
                d="M69.89 24.712c0-2.697.659-5.288 1.976-7.554l-7.464-4.964c-2.195 3.67-3.513 7.986-3.513 12.518 0 4.965 1.208 8.85 3.513 12.41l7.354-4.963C70.66 30 69.89 27.41 69.89 24.712z"
                fill="url(#paint2_linear_1_1312)"
            />
            <Path
                d="M107.979 12.301l-7.464 4.964a15.634 15.634 0 011.866 7.447c0 2.59-.659 5.18-1.756 7.338l7.464 4.964c2.305-3.669 3.403-7.662 3.403-12.302-.11-4.425-1.318-8.742-3.513-12.41z"
                fill="url(#paint3_linear_1_1312)"
            />
            <Path
                d="M86.136 17.589c3.952 0 7.245 3.237 7.245 7.122 0 3.993-3.293 7.123-7.245 7.123-4.061 0-7.244-3.238-7.244-7.123 0-3.885 3.293-7.122 7.244-7.122z"
                fill="url(#paint4_linear_1_1312)"
            />
            <Path
                d="M118.518 5.182c3.512 5.72 5.598 12.41 5.598 19.533a36.614 36.614 0 01-5.598 19.425l-7.574-5.072c2.524-4.208 3.951-9.065 3.951-14.353s-1.427-10.144-4.061-14.46l7.684-5.073zM53.754 44.356c-3.512-5.72-5.598-12.41-5.598-19.64 0-7.123 2.086-13.922 5.708-19.534l7.574 5.072a27.202 27.202 0 00-4.171 14.461c0 5.288 1.537 10.253 4.061 14.461l-7.574 5.18z"
                fill="url(#paint5_linear_1_1312)"
            />
            <Path
                d="M15.467 71.636H9.166V80H6.3v-8.364H0v-2.978h15.467v2.978zM34.6 74.271c0 1.604-.572 2.98-1.604 4.01-1.03 1.031-2.406 1.604-4.01 1.604h-6.645c-1.604 0-2.978-.573-4.01-1.604-1.03-1.03-1.604-2.406-1.604-4.01 0-1.604.573-2.978 1.604-4.01 1.032-1.03 2.407-1.603 4.01-1.603h6.645c1.604 0 2.98.572 4.01 1.603 1.146 1.032 1.604 2.406 1.604 4.01zm-2.864 0c0-.802-.229-1.489-.687-1.947-.459-.459-1.146-.688-1.948-.802h-6.645c-.802 0-1.49.229-1.948.802-.458.458-.687 1.145-.687 1.947s.23 1.49.687 1.948c.459.458 1.146.688 1.948.688h6.645c.802 0 1.49-.23 1.948-.688.458-.458.687-1.146.687-1.948zM56.827 79.885h-9.853c-1.719 0-3.093-.573-4.125-1.718-.916-1.031-1.374-2.292-1.374-3.781 0-1.49.458-2.864 1.374-4.01 1.146-1.146 2.406-1.719 4.125-1.719h9.853v2.98h-9.853c-1.146 0-1.948.458-2.406 1.26h9.395v2.978h-9.28c.458.802 1.26 1.26 2.406 1.26h9.852v2.75h-.114zM74.241 79.885h-2.979v-2.75H61.64v2.75h-2.98v-6.301c0-1.604.803-2.864 2.407-3.78 1.374-.688 2.864-1.147 4.582-1.147h1.375c1.833 0 3.323.344 4.583 1.146 1.604.917 2.406 2.177 2.406 3.781v6.301h.23zm-2.864-5.728v-.573c0-.687-.573-1.26-1.604-1.604-.802-.23-1.604-.458-2.52-.458h-1.375c-1.604 0-2.75.343-3.438.916-.343.344-.572.688-.687 1.146v.573h9.624zM91.77 72.897c0 1.603-.802 2.864-2.406 3.551l1.719 3.437H87.76l-1.374-2.864h-7.104v2.75h-2.978V68.657h9.852c1.49 0 2.75.344 3.781 1.032 1.146.802 1.833 1.833 1.833 3.208zm-2.978 0c0-.459-.344-.802-1.032-1.032-.572-.229-1.03-.229-1.604-.229h-6.874v2.635h6.874c.573 0 1.146-.114 1.604-.229.688-.344 1.032-.687 1.032-1.145zM108.841 80h-2.062l-10.426-7.103V80h-2.978V68.657h2.062l10.426 6.99v-6.99h2.978V80zM131.87 80h-2.062l-10.426-7.103V80h-2.979V68.657h2.062l10.426 6.99v-6.99h2.979V80zM151.462 74.271c0 1.604-.573 2.98-1.604 4.01-1.031 1.031-2.406 1.604-4.01 1.604h-6.645c-1.604 0-2.979-.573-4.01-1.604-1.031-1.03-1.604-2.406-1.604-4.01 0-1.604.573-2.978 1.604-4.01 1.031-1.03 2.406-1.603 4.01-1.603h6.645c1.604 0 2.979.572 4.01 1.603 1.146 1.032 1.604 2.406 1.604 4.01zm-2.864 0c0-.802-.229-1.489-.688-1.947-.458-.459-1.145-.688-1.947-.802h-6.645c-.802 0-1.49.229-1.948.802-.458.458-.687 1.145-.687 1.947s.229 1.49.687 1.948c.458.458 1.146.688 1.948.688h6.645c.802 0 1.489-.23 1.947-.688.344-.458.688-1.146.688-1.948zM172.428 68.657L167.96 80h-2.636l-2.864-6.302c-1.718 3.896-2.749 6.073-2.864 6.302h-2.635l-4.354-11.343h3.208l2.635 6.76 3.094-6.76h1.947l3.094 6.76 2.635-6.76h3.208z"
                fill="#F40074"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1_1312"
                    x1={86.1902}
                    y1={-0.207602}
                    x2={86.1902}
                    y2={14.353}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1_1312"
                    x1={86.2444}
                    y1={34.7164}
                    x2={86.2444}
                    y2={59.6774}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_1_1312"
                    x1={66.3778}
                    y1={11.8335}
                    x2={66.3778}
                    y2={37.1229}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_1_1312"
                    x1={106.003}
                    y1={11.9438}
                    x2={106.003}
                    y2={37.0143}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_1_1312"
                    x1={86.1363}
                    y1={17.3826}
                    x2={86.1363}
                    y2={31.8337}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_1_1312"
                    x1={86.136}
                    y1={4.61576}
                    x2={86.136}
                    y2={44.3563}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#E30370" />
                    <Stop offset={1} stopColor="#451242" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

function QrCode(props) {
    return (
        <Svg height={150} width={150} xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M0 0h5v5H0zM5 0h5v5H5zM10 0h6v5h-6zM16 0h5v5h-5zM21 0h5v5h-5zM26 0h5v5h-5zM31 0h5v5h-5z" />
            <Path d="M36 0h5v5h-5zM41 0h6v5h-6zM47 0h5v5h-5z" fill="#FFF" />
            <Path d="M52 0h5v5h-5z" />
            <Path d="M57 0h5v5h-5z" fill="#FFF" />
            <Path d="M62 0h5v5h-5z" />
            <Path d="M67 0h5v5h-5z" fill="#FFF" />
            <Path d="M72 0h6v5h-6z" />
            <Path d="M78 0h5v5h-5zM83 0h5v5h-5zM88 0h5v5h-5zM93 0h5v5h-5z" fill="#FFF" />
            <Path d="M98 0h5v5h-5z" />
            <Path d="M103 0h6v5h-6zM109 0h5v5h-5z" fill="#FFF" />
            <Path d="M114 0h5v5h-5zM119 0h5v5h-5zM124 0h5v5h-5zM129 0h5v5h-5zM134 0h6v5h-6zM140 0h5v5h-5zM145 0h5v5h-5zM0 5h5v5H0z" />
            <Path d="M5 5h5v5H5zM10 5h6v5h-6zM16 5h5v5h-5zM21 5h5v5h-5zM26 5h5v5h-5z" fill="#FFF" />
            <Path d="M31 5h5v5h-5z" />
            <Path d="M36 5h5v5h-5z" fill="#FFF" />
            <Path d="M41 5h6v5h-6z" />
            <Path d="M47 5h5v5h-5z" fill="#FFF" />
            <Path d="M52 5h5v5h-5z" />
            <Path d="M57 5h5v5h-5zM62 5h5v5h-5z" fill="#FFF" />
            <Path d="M67 5h5v5h-5zM72 5h6v5h-6zM78 5h5v5h-5z" />
            <Path d="M83 5h5v5h-5zM88 5h5v5h-5z" fill="#FFF" />
            <Path d="M93 5h5v5h-5z" />
            <Path d="M98 5h5v5h-5zM103 5h6v5h-6zM109 5h5v5h-5z" fill="#FFF" />
            <Path d="M114 5h5v5h-5z" />
            <Path d="M119 5h5v5h-5zM124 5h5v5h-5zM129 5h5v5h-5zM134 5h6v5h-6zM140 5h5v5h-5z" fill="#FFF" />
            <Path d="M145 5h5v5h-5zM0 10h5v6H0z" />
            <Path d="M5 10h5v6H5z" fill="#FFF" />
            <Path d="M10 10h6v6h-6zM16 10h5v6h-5zM21 10h5v6h-5z" />
            <Path d="M26 10h5v6h-5z" fill="#FFF" />
            <Path d="M31 10h5v6h-5z" />
            <Path d="M36 10h5v6h-5zM41 10h6v6h-6zM47 10h5v6h-5zM52 10h5v6h-5zM57 10h5v6h-5z" fill="#FFF" />
            <Path d="M62 10h5v6h-5z" />
            <Path d="M67 10h5v6h-5z" fill="#FFF" />
            <Path d="M72 10h6v6h-6zM78 10h5v6h-5z" />
            <Path d="M83 10h5v6h-5zM88 10h5v6h-5z" fill="#FFF" />
            <Path d="M93 10h5v6h-5z" />
            <Path d="M98 10h5v6h-5zM103 10h6v6h-6zM109 10h5v6h-5z" fill="#FFF" />
            <Path d="M114 10h5v6h-5z" />
            <Path d="M119 10h5v6h-5z" fill="#FFF" />
            <Path d="M124 10h5v6h-5zM129 10h5v6h-5zM134 10h6v6h-6z" />
            <Path d="M140 10h5v6h-5z" fill="#FFF" />
            <Path d="M145 10h5v6h-5zM0 16h5v5H0z" />
            <Path d="M5 16h5v5H5z" fill="#FFF" />
            <Path d="M10 16h6v5h-6zM16 16h5v5h-5zM21 16h5v5h-5z" />
            <Path d="M26 16h5v5h-5z" fill="#FFF" />
            <Path d="M31 16h5v5h-5z" />
            <Path d="M36 16h5v5h-5z" fill="#FFF" />
            <Path d="M41 16h6v5h-6zM47 16h5v5h-5zM52 16h5v5h-5z" />
            <Path d="M57 16h5v5h-5z" fill="#FFF" />
            <Path d="M62 16h5v5h-5zM67 16h5v5h-5zM72 16h6v5h-6z" />
            <Path d="M78 16h5v5h-5z" fill="#FFF" />
            <Path d="M83 16h5v5h-5zM88 16h5v5h-5zM93 16h5v5h-5z" />
            <Path d="M98 16h5v5h-5z" fill="#FFF" />
            <Path d="M103 16h6v5h-6z" />
            <Path d="M109 16h5v5h-5z" fill="#FFF" />
            <Path d="M114 16h5v5h-5z" />
            <Path d="M119 16h5v5h-5z" fill="#FFF" />
            <Path d="M124 16h5v5h-5zM129 16h5v5h-5zM134 16h6v5h-6z" />
            <Path d="M140 16h5v5h-5z" fill="#FFF" />
            <Path d="M145 16h5v5h-5zM0 21h5v5H0z" />
            <Path d="M5 21h5v5H5z" fill="#FFF" />
            <Path d="M10 21h6v5h-6zM16 21h5v5h-5zM21 21h5v5h-5z" />
            <Path d="M26 21h5v5h-5z" fill="#FFF" />
            <Path d="M31 21h5v5h-5z" />
            <Path d="M36 21h5v5h-5zM41 21h6v5h-6z" fill="#FFF" />
            <Path d="M47 21h5v5h-5z" />
            <Path
                d="M52 21h5v5h-5zM57 21h5v5h-5zM62 21h5v5h-5zM67 21h5v5h-5zM72 21h6v5h-6zM78 21h5v5h-5zM83 21h5v5h-5zM88 21h5v5h-5zM93 21h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M98 21h5v5h-5z" />
            <Path d="M103 21h6v5h-6zM109 21h5v5h-5z" fill="#FFF" />
            <Path d="M114 21h5v5h-5z" />
            <Path d="M119 21h5v5h-5z" fill="#FFF" />
            <Path d="M124 21h5v5h-5zM129 21h5v5h-5zM134 21h6v5h-6z" />
            <Path d="M140 21h5v5h-5z" fill="#FFF" />
            <Path d="M145 21h5v5h-5zM0 26h5v5H0z" />
            <Path d="M5 26h5v5H5zM10 26h6v5h-6zM16 26h5v5h-5zM21 26h5v5h-5zM26 26h5v5h-5z" fill="#FFF" />
            <Path d="M31 26h5v5h-5z" />
            <Path d="M36 26h5v5h-5z" fill="#FFF" />
            <Path d="M41 26h6v5h-6zM47 26h5v5h-5z" />
            <Path d="M52 26h5v5h-5z" fill="#FFF" />
            <Path d="M57 26h5v5h-5zM62 26h5v5h-5zM67 26h5v5h-5z" />
            <Path d="M72 26h6v5h-6z" fill="#FFF" />
            <Path d="M78 26h5v5h-5zM83 26h5v5h-5z" />
            <Path d="M88 26h5v5h-5z" fill="#FFF" />
            <Path d="M93 26h5v5h-5z" />
            <Path d="M98 26h5v5h-5zM103 26h6v5h-6zM109 26h5v5h-5z" fill="#FFF" />
            <Path d="M114 26h5v5h-5z" />
            <Path d="M119 26h5v5h-5zM124 26h5v5h-5zM129 26h5v5h-5zM134 26h6v5h-6zM140 26h5v5h-5z" fill="#FFF" />
            <Path d="M145 26h5v5h-5zM0 31h5v5H0zM5 31h5v5H5zM10 31h6v5h-6zM16 31h5v5h-5zM21 31h5v5h-5zM26 31h5v5h-5zM31 31h5v5h-5z" />
            <Path d="M36 31h5v5h-5z" fill="#FFF" />
            <Path d="M41 31h6v5h-6z" />
            <Path d="M47 31h5v5h-5z" fill="#FFF" />
            <Path d="M52 31h5v5h-5z" />
            <Path d="M57 31h5v5h-5z" fill="#FFF" />
            <Path d="M62 31h5v5h-5z" />
            <Path d="M67 31h5v5h-5z" fill="#FFF" />
            <Path d="M72 31h6v5h-6z" />
            <Path d="M78 31h5v5h-5z" fill="#FFF" />
            <Path d="M83 31h5v5h-5z" />
            <Path d="M88 31h5v5h-5z" fill="#FFF" />
            <Path d="M93 31h5v5h-5z" />
            <Path d="M98 31h5v5h-5z" fill="#FFF" />
            <Path d="M103 31h6v5h-6z" />
            <Path d="M109 31h5v5h-5z" fill="#FFF" />
            <Path d="M114 31h5v5h-5zM119 31h5v5h-5zM124 31h5v5h-5zM129 31h5v5h-5zM134 31h6v5h-6zM140 31h5v5h-5zM145 31h5v5h-5z" />
            <Path
                d="M0 36h5v5H0zM5 36h5v5H5zM10 36h6v5h-6zM16 36h5v5h-5zM21 36h5v5h-5zM26 36h5v5h-5zM31 36h5v5h-5zM36 36h5v5h-5zM41 36h6v5h-6z"
                fill="#FFF"
            />
            <Path d="M47 36h5v5h-5zM52 36h5v5h-5zM57 36h5v5h-5z" />
            <Path d="M62 36h5v5h-5zM67 36h5v5h-5z" fill="#FFF" />
            <Path d="M72 36h6v5h-6z" />
            <Path d="M78 36h5v5h-5zM83 36h5v5h-5zM88 36h5v5h-5z" fill="#FFF" />
            <Path d="M93 36h5v5h-5zM98 36h5v5h-5z" />
            <Path
                d="M103 36h6v5h-6zM109 36h5v5h-5zM114 36h5v5h-5zM119 36h5v5h-5zM124 36h5v5h-5zM129 36h5v5h-5zM134 36h6v5h-6zM140 36h5v5h-5zM145 36h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M0 41h5v6H0zM5 41h5v6H5zM10 41h6v6h-6zM16 41h5v6h-5zM21 41h5v6h-5z" />
            <Path d="M26 41h5v6h-5z" fill="#FFF" />
            <Path d="M31 41h5v6h-5zM36 41h5v6h-5zM41 41h6v6h-6zM47 41h5v6h-5z" />
            <Path d="M52 41h5v6h-5z" fill="#FFF" />
            <Path d="M57 41h5v6h-5z" />
            <Path d="M62 41h5v6h-5z" fill="#FFF" />
            <Path d="M67 41h5v6h-5z" />
            <Path d="M72 41h6v6h-6z" fill="#FFF" />
            <Path d="M78 41h5v6h-5z" />
            <Path d="M83 41h5v6h-5z" fill="#FFF" />
            <Path d="M88 41h5v6h-5zM93 41h5v6h-5z" />
            <Path d="M98 41h5v6h-5zM103 41h6v6h-6z" fill="#FFF" />
            <Path d="M109 41h5v6h-5z" />
            <Path d="M114 41h5v6h-5z" fill="#FFF" />
            <Path d="M119 41h5v6h-5z" />
            <Path d="M124 41h5v6h-5z" fill="#FFF" />
            <Path d="M129 41h5v6h-5z" />
            <Path d="M134 41h6v6h-6z" fill="#FFF" />
            <Path d="M140 41h5v6h-5z" />
            <Path d="M145 41h5v6h-5zM0 47h5v5H0z" fill="#FFF" />
            <Path d="M5 47h5v5H5z" />
            <Path d="M10 47h6v5h-6z" fill="#FFF" />
            <Path d="M16 47h5v5h-5z" />
            <Path d="M21 47h5v5h-5z" fill="#FFF" />
            <Path d="M26 47h5v5h-5z" />
            <Path d="M31 47h5v5h-5z" fill="#FFF" />
            <Path d="M36 47h5v5h-5z" />
            <Path d="M41 47h6v5h-6zM47 47h5v5h-5z" fill="#FFF" />
            <Path d="M52 47h5v5h-5z" />
            <Path d="M57 47h5v5h-5z" fill="#FFF" />
            <Path d="M62 47h5v5h-5zM67 47h5v5h-5zM72 47h6v5h-6z" />
            <Path d="M78 47h5v5h-5z" fill="#FFF" />
            <Path d="M83 47h5v5h-5z" />
            <Path d="M88 47h5v5h-5zM93 47h5v5h-5z" fill="#FFF" />
            <Path d="M98 47h5v5h-5zM103 47h6v5h-6z" />
            <Path d="M109 47h5v5h-5z" fill="#FFF" />
            <Path d="M114 47h5v5h-5z" />
            <Path d="M119 47h5v5h-5z" fill="#FFF" />
            <Path d="M124 47h5v5h-5z" />
            <Path d="M129 47h5v5h-5zM134 47h6v5h-6z" fill="#FFF" />
            <Path d="M140 47h5v5h-5zM145 47h5v5h-5z" />
            <Path d="M0 52h5v5H0z" fill="#FFF" />
            <Path d="M5 52h5v5H5z" />
            <Path d="M10 52h6v5h-6z" fill="#FFF" />
            <Path d="M16 52h5v5h-5zM21 52h5v5h-5z" />
            <Path d="M26 52h5v5h-5z" fill="#FFF" />
            <Path d="M31 52h5v5h-5z" />
            <Path d="M36 52h5v5h-5z" fill="#FFF" />
            <Path d="M41 52h6v5h-6z" />
            <Path d="M47 52h5v5h-5z" fill="#FFF" />
            <Path d="M52 52h5v5h-5z" />
            <Path d="M57 52h5v5h-5zM62 52h5v5h-5zM67 52h5v5h-5zM72 52h6v5h-6z" fill="#FFF" />
            <Path d="M78 52h5v5h-5zM83 52h5v5h-5zM88 52h5v5h-5zM93 52h5v5h-5z" />
            <Path d="M98 52h5v5h-5zM103 52h6v5h-6z" fill="#FFF" />
            <Path d="M109 52h5v5h-5z" />
            <Path d="M114 52h5v5h-5z" fill="#FFF" />
            <Path d="M119 52h5v5h-5zM124 52h5v5h-5zM129 52h5v5h-5zM134 52h6v5h-6z" />
            <Path d="M140 52h5v5h-5zM145 52h5v5h-5zM0 57h5v5H0z" fill="#FFF" />
            <Path d="M5 57h5v5H5zM10 57h6v5h-6zM16 57h5v5h-5zM21 57h5v5h-5zM26 57h5v5h-5z" />
            <Path
                d="M31 57h5v5h-5zM36 57h5v5h-5zM41 57h6v5h-6zM47 57h5v5h-5zM52 57h5v5h-5zM57 57h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M62 57h5v5h-5z" />
            <Path d="M67 57h5v5h-5z" fill="#FFF" />
            <Path d="M72 57h6v5h-6zM78 57h5v5h-5zM83 57h5v5h-5z" />
            <Path d="M88 57h5v5h-5z" fill="#FFF" />
            <Path d="M93 57h5v5h-5zM98 57h5v5h-5zM103 57h6v5h-6z" />
            <Path d="M109 57h5v5h-5zM114 57h5v5h-5zM119 57h5v5h-5z" fill="#FFF" />
            <Path d="M124 57h5v5h-5z" />
            <Path d="M129 57h5v5h-5zM134 57h6v5h-6z" fill="#FFF" />
            <Path d="M140 57h5v5h-5z" />
            <Path d="M145 57h5v5h-5zM0 62h5v5H0z" fill="#FFF" />
            <Path d="M5 62h5v5H5z" />
            <Path d="M10 62h6v5h-6z" fill="#FFF" />
            <Path d="M16 62h5v5h-5zM21 62h5v5h-5z" />
            <Path d="M26 62h5v5h-5z" fill="#FFF" />
            <Path d="M31 62h5v5h-5zM36 62h5v5h-5zM41 62h6v5h-6zM47 62h5v5h-5zM52 62h5v5h-5z" />
            <Path d="M57 62h5v5h-5z" fill="#FFF" />
            <Path d="M62 62h5v5h-5zM67 62h5v5h-5z" />
            <Path d="M72 62h6v5h-6z" fill="#FFF" />
            <Path d="M78 62h5v5h-5zM83 62h5v5h-5zM88 62h5v5h-5zM93 62h5v5h-5z" />
            <Path d="M98 62h5v5h-5z" fill="#FFF" />
            <Path d="M103 62h6v5h-6zM109 62h5v5h-5z" />
            <Path d="M114 62h5v5h-5zM119 62h5v5h-5zM124 62h5v5h-5z" fill="#FFF" />
            <Path d="M129 62h5v5h-5zM134 62h6v5h-6zM140 62h5v5h-5zM145 62h5v5h-5z" />
            <Path d="M0 67h5v5H0zM5 67h5v5H5zM10 67h6v5h-6z" fill="#FFF" />
            <Path d="M16 67h5v5h-5zM21 67h5v5h-5z" />
            <Path d="M26 67h5v5h-5zM31 67h5v5h-5z" fill="#FFF" />
            <Path d="M36 67h5v5h-5z" />
            <Path d="M41 67h6v5h-6zM47 67h5v5h-5zM52 67h5v5h-5zM57 67h5v5h-5zM62 67h5v5h-5z" fill="#FFF" />
            <Path d="M67 67h5v5h-5zM72 67h6v5h-6z" />
            <Path d="M78 67h5v5h-5zM83 67h5v5h-5zM88 67h5v5h-5zM93 67h5v5h-5z" fill="#FFF" />
            <Path d="M98 67h5v5h-5z" />
            <Path d="M103 67h6v5h-6zM109 67h5v5h-5z" fill="#FFF" />
            <Path d="M114 67h5v5h-5zM119 67h5v5h-5zM124 67h5v5h-5zM129 67h5v5h-5z" />
            <Path d="M134 67h6v5h-6zM140 67h5v5h-5z" fill="#FFF" />
            <Path d="M145 67h5v5h-5z" />
            <Path d="M0 72h5v6H0z" fill="#FFF" />
            <Path d="M5 72h5v6H5zM10 72h6v6h-6z" />
            <Path d="M16 72h5v6h-5zM21 72h5v6h-5zM26 72h5v6h-5z" fill="#FFF" />
            <Path d="M31 72h5v6h-5zM36 72h5v6h-5zM41 72h6v6h-6z" />
            <Path d="M47 72h5v6h-5z" fill="#FFF" />
            <Path d="M52 72h5v6h-5zM57 72h5v6h-5zM62 72h5v6h-5z" />
            <Path d="M67 72h5v6h-5zM72 72h6v6h-6z" fill="#FFF" />
            <Path d="M78 72h5v6h-5zM83 72h5v6h-5z" />
            <Path d="M88 72h5v6h-5z" fill="#FFF" />
            <Path d="M93 72h5v6h-5z" />
            <Path d="M98 72h5v6h-5z" fill="#FFF" />
            <Path d="M103 72h6v6h-6zM109 72h5v6h-5z" />
            <Path d="M114 72h5v6h-5zM119 72h5v6h-5zM124 72h5v6h-5zM129 72h5v6h-5z" fill="#FFF" />
            <Path d="M134 72h6v6h-6zM140 72h5v6h-5z" />
            <Path d="M145 72h5v6h-5z" fill="#FFF" />
            <Path d="M0 78h5v5H0zM5 78h5v5H5zM10 78h6v5h-6z" />
            <Path d="M16 78h5v5h-5z" fill="#FFF" />
            <Path d="M21 78h5v5h-5z" />
            <Path d="M26 78h5v5h-5zM31 78h5v5h-5zM36 78h5v5h-5z" fill="#FFF" />
            <Path d="M41 78h6v5h-6zM47 78h5v5h-5zM52 78h5v5h-5zM57 78h5v5h-5z" />
            <Path d="M62 78h5v5h-5zM67 78h5v5h-5z" fill="#FFF" />
            <Path d="M72 78h6v5h-6zM78 78h5v5h-5z" />
            <Path d="M83 78h5v5h-5zM88 78h5v5h-5zM93 78h5v5h-5z" fill="#FFF" />
            <Path d="M98 78h5v5h-5z" />
            <Path d="M103 78h6v5h-6zM109 78h5v5h-5z" fill="#FFF" />
            <Path d="M114 78h5v5h-5zM119 78h5v5h-5zM124 78h5v5h-5zM129 78h5v5h-5z" />
            <Path d="M134 78h6v5h-6z" fill="#FFF" />
            <Path d="M140 78h5v5h-5z" />
            <Path d="M145 78h5v5h-5zM0 83h5v5H0z" fill="#FFF" />
            <Path d="M5 83h5v5H5z" />
            <Path d="M10 83h6v5h-6zM16 83h5v5h-5z" fill="#FFF" />
            <Path d="M21 83h5v5h-5zM26 83h5v5h-5zM31 83h5v5h-5zM36 83h5v5h-5z" />
            <Path d="M41 83h6v5h-6zM47 83h5v5h-5zM52 83h5v5h-5z" fill="#FFF" />
            <Path d="M57 83h5v5h-5z" />
            <Path d="M62 83h5v5h-5z" fill="#FFF" />
            <Path d="M67 83h5v5h-5z" />
            <Path d="M72 83h6v5h-6zM78 83h5v5h-5z" fill="#FFF" />
            <Path d="M83 83h5v5h-5zM88 83h5v5h-5z" />
            <Path
                d="M93 83h5v5h-5zM98 83h5v5h-5zM103 83h6v5h-6zM109 83h5v5h-5zM114 83h5v5h-5zM119 83h5v5h-5zM124 83h5v5h-5zM129 83h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M134 83h6v5h-6zM140 83h5v5h-5zM145 83h5v5h-5zM0 88h5v5H0zM5 88h5v5H5z" />
            <Path d="M10 88h6v5h-6z" fill="#FFF" />
            <Path d="M16 88h5v5h-5z" />
            <Path d="M21 88h5v5h-5zM26 88h5v5h-5zM31 88h5v5h-5z" fill="#FFF" />
            <Path d="M36 88h5v5h-5z" />
            <Path d="M41 88h6v5h-6z" fill="#FFF" />
            <Path d="M47 88h5v5h-5z" />
            <Path d="M52 88h5v5h-5zM57 88h5v5h-5z" fill="#FFF" />
            <Path d="M62 88h5v5h-5z" />
            <Path d="M67 88h5v5h-5z" fill="#FFF" />
            <Path d="M72 88h6v5h-6z" />
            <Path d="M78 88h5v5h-5zM83 88h5v5h-5zM88 88h5v5h-5z" fill="#FFF" />
            <Path d="M93 88h5v5h-5zM98 88h5v5h-5zM103 88h6v5h-6zM109 88h5v5h-5zM114 88h5v5h-5zM119 88h5v5h-5zM124 88h5v5h-5zM129 88h5v5h-5z" />
            <Path d="M134 88h6v5h-6zM140 88h5v5h-5z" fill="#FFF" />
            <Path d="M145 88h5v5h-5zM0 93h5v5H0z" />
            <Path d="M5 93h5v5H5z" fill="#FFF" />
            <Path d="M10 93h6v5h-6zM16 93h5v5h-5z" />
            <Path d="M21 93h5v5h-5z" fill="#FFF" />
            <Path d="M26 93h5v5h-5zM31 93h5v5h-5z" />
            <Path d="M36 93h5v5h-5z" fill="#FFF" />
            <Path d="M41 93h6v5h-6zM47 93h5v5h-5z" />
            <Path d="M52 93h5v5h-5zM57 93h5v5h-5zM62 93h5v5h-5zM67 93h5v5h-5z" fill="#FFF" />
            <Path d="M72 93h6v5h-6zM78 93h5v5h-5zM83 93h5v5h-5z" />
            <Path d="M88 93h5v5h-5zM93 93h5v5h-5zM98 93h5v5h-5z" fill="#FFF" />
            <Path d="M103 93h6v5h-6zM109 93h5v5h-5z" />
            <Path d="M114 93h5v5h-5z" fill="#FFF" />
            <Path d="M119 93h5v5h-5z" />
            <Path d="M124 93h5v5h-5zM129 93h5v5h-5z" fill="#FFF" />
            <Path d="M134 93h6v5h-6z" />
            <Path d="M140 93h5v5h-5zM145 93h5v5h-5z" fill="#FFF" />
            <Path d="M0 98h5v5H0z" />
            <Path d="M5 98h5v5H5z" fill="#FFF" />
            <Path d="M10 98h6v5h-6z" />
            <Path d="M16 98h5v5h-5z" fill="#FFF" />
            <Path d="M21 98h5v5h-5z" />
            <Path d="M26 98h5v5h-5zM31 98h5v5h-5zM36 98h5v5h-5zM41 98h6v5h-6zM47 98h5v5h-5z" fill="#FFF" />
            <Path d="M52 98h5v5h-5z" />
            <Path d="M57 98h5v5h-5z" fill="#FFF" />
            <Path d="M62 98h5v5h-5z" />
            <Path d="M67 98h5v5h-5z" fill="#FFF" />
            <Path d="M72 98h6v5h-6z" />
            <Path
                d="M78 98h5v5h-5zM83 98h5v5h-5zM88 98h5v5h-5zM93 98h5v5h-5zM98 98h5v5h-5zM103 98h6v5h-6zM109 98h5v5h-5zM114 98h5v5h-5zM119 98h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M124 98h5v5h-5z" />
            <Path d="M129 98h5v5h-5zM134 98h6v5h-6z" fill="#FFF" />
            <Path d="M140 98h5v5h-5z" />
            <Path d="M145 98h5v5h-5z" fill="#FFF" />
            <Path d="M0 103h5v6H0z" />
            <Path d="M5 103h5v6H5z" fill="#FFF" />
            <Path d="M10 103h6v6h-6z" />
            <Path d="M16 103h5v6h-5z" fill="#FFF" />
            <Path d="M21 103h5v6h-5z" />
            <Path d="M26 103h5v6h-5z" fill="#FFF" />
            <Path d="M31 103h5v6h-5zM36 103h5v6h-5z" />
            <Path d="M41 103h6v6h-6zM47 103h5v6h-5z" fill="#FFF" />
            <Path d="M52 103h5v6h-5z" />
            <Path d="M57 103h5v6h-5z" fill="#FFF" />
            <Path d="M62 103h5v6h-5zM67 103h5v6h-5z" />
            <Path d="M72 103h6v6h-6z" fill="#FFF" />
            <Path d="M78 103h5v6h-5zM83 103h5v6h-5zM88 103h5v6h-5zM93 103h5v6h-5z" />
            <Path d="M98 103h5v6h-5z" fill="#FFF" />
            <Path d="M103 103h6v6h-6zM109 103h5v6h-5zM114 103h5v6h-5zM119 103h5v6h-5zM124 103h5v6h-5zM129 103h5v6h-5zM134 103h6v6h-6zM140 103h5v6h-5z" />
            <Path
                d="M145 103h5v6h-5zM0 109h5v5H0zM5 109h5v5H5zM10 109h6v5h-6zM16 109h5v5h-5zM21 109h5v5h-5zM26 109h5v5h-5zM31 109h5v5h-5zM36 109h5v5h-5z"
                fill="#FFF"
            />
            <Path d="M41 109h6v5h-6z" />
            <Path d="M47 109h5v5h-5zM52 109h5v5h-5zM57 109h5v5h-5zM62 109h5v5h-5zM67 109h5v5h-5z" fill="#FFF" />
            <Path d="M72 109h6v5h-6z" />
            <Path d="M78 109h5v5h-5zM83 109h5v5h-5zM88 109h5v5h-5zM93 109h5v5h-5z" fill="#FFF" />
            <Path d="M98 109h5v5h-5zM103 109h6v5h-6z" />
            <Path d="M109 109h5v5h-5zM114 109h5v5h-5zM119 109h5v5h-5z" fill="#FFF" />
            <Path d="M124 109h5v5h-5z" />
            <Path d="M129 109h5v5h-5zM134 109h6v5h-6zM140 109h5v5h-5z" fill="#FFF" />
            <Path d="M145 109h5v5h-5zM0 114h5v5H0zM5 114h5v5H5zM10 114h6v5h-6zM16 114h5v5h-5zM21 114h5v5h-5zM26 114h5v5h-5zM31 114h5v5h-5z" />
            <Path d="M36 114h5v5h-5z" fill="#FFF" />
            <Path d="M41 114h6v5h-6z" />
            <Path d="M47 114h5v5h-5z" fill="#FFF" />
            <Path d="M52 114h5v5h-5zM57 114h5v5h-5zM62 114h5v5h-5zM67 114h5v5h-5z" />
            <Path d="M72 114h6v5h-6z" fill="#FFF" />
            <Path d="M78 114h5v5h-5zM83 114h5v5h-5zM88 114h5v5h-5zM93 114h5v5h-5zM98 114h5v5h-5zM103 114h6v5h-6z" />
            <Path d="M109 114h5v5h-5z" fill="#FFF" />
            <Path d="M114 114h5v5h-5z" />
            <Path d="M119 114h5v5h-5z" fill="#FFF" />
            <Path d="M124 114h5v5h-5z" />
            <Path d="M129 114h5v5h-5zM134 114h6v5h-6z" fill="#FFF" />
            <Path d="M140 114h5v5h-5z" />
            <Path d="M145 114h5v5h-5z" fill="#FFF" />
            <Path d="M0 119h5v5H0z" />
            <Path d="M5 119h5v5H5zM10 119h6v5h-6zM16 119h5v5h-5zM21 119h5v5h-5zM26 119h5v5h-5z" fill="#FFF" />
            <Path d="M31 119h5v5h-5z" />
            <Path d="M36 119h5v5h-5zM41 119h6v5h-6z" fill="#FFF" />
            <Path d="M47 119h5v5h-5zM52 119h5v5h-5zM57 119h5v5h-5z" />
            <Path d="M62 119h5v5h-5zM67 119h5v5h-5zM72 119h6v5h-6zM78 119h5v5h-5z" fill="#FFF" />
            <Path d="M83 119h5v5h-5z" />
            <Path d="M88 119h5v5h-5zM93 119h5v5h-5zM98 119h5v5h-5z" fill="#FFF" />
            <Path d="M103 119h6v5h-6z" />
            <Path d="M109 119h5v5h-5zM114 119h5v5h-5zM119 119h5v5h-5z" fill="#FFF" />
            <Path d="M124 119h5v5h-5zM129 119h5v5h-5z" />
            <Path d="M134 119h6v5h-6z" fill="#FFF" />
            <Path d="M140 119h5v5h-5zM145 119h5v5h-5zM0 124h5v5H0z" />
            <Path d="M5 124h5v5H5z" fill="#FFF" />
            <Path d="M10 124h6v5h-6zM16 124h5v5h-5zM21 124h5v5h-5z" />
            <Path d="M26 124h5v5h-5z" fill="#FFF" />
            <Path d="M31 124h5v5h-5z" />
            <Path d="M36 124h5v5h-5z" fill="#FFF" />
            <Path d="M41 124h6v5h-6zM47 124h5v5h-5z" />
            <Path d="M52 124h5v5h-5z" fill="#FFF" />
            <Path d="M57 124h5v5h-5z" />
            <Path d="M62 124h5v5h-5zM67 124h5v5h-5zM72 124h6v5h-6z" fill="#FFF" />
            <Path d="M78 124h5v5h-5zM83 124h5v5h-5zM88 124h5v5h-5z" />
            <Path d="M93 124h5v5h-5zM98 124h5v5h-5z" fill="#FFF" />
            <Path d="M103 124h6v5h-6zM109 124h5v5h-5zM114 124h5v5h-5zM119 124h5v5h-5zM124 124h5v5h-5z" />
            <Path d="M129 124h5v5h-5z" fill="#FFF" />
            <Path d="M134 124h6v5h-6zM140 124h5v5h-5zM145 124h5v5h-5zM0 129h5v5H0z" />
            <Path d="M5 129h5v5H5z" fill="#FFF" />
            <Path d="M10 129h6v5h-6zM16 129h5v5h-5zM21 129h5v5h-5z" />
            <Path d="M26 129h5v5h-5z" fill="#FFF" />
            <Path d="M31 129h5v5h-5z" />
            <Path d="M36 129h5v5h-5z" fill="#FFF" />
            <Path d="M41 129h6v5h-6zM47 129h5v5h-5z" />
            <Path d="M52 129h5v5h-5zM57 129h5v5h-5z" fill="#FFF" />
            <Path d="M62 129h5v5h-5zM67 129h5v5h-5z" />
            <Path d="M72 129h6v5h-6zM78 129h5v5h-5zM83 129h5v5h-5zM88 129h5v5h-5z" fill="#FFF" />
            <Path d="M93 129h5v5h-5z" />
            <Path d="M98 129h5v5h-5z" fill="#FFF" />
            <Path d="M103 129h6v5h-6zM109 129h5v5h-5z" />
            <Path d="M114 129h5v5h-5zM119 129h5v5h-5zM124 129h5v5h-5zM129 129h5v5h-5zM134 129h6v5h-6z" fill="#FFF" />
            <Path d="M140 129h5v5h-5zM145 129h5v5h-5zM0 134h5v6H0z" />
            <Path d="M5 134h5v6H5z" fill="#FFF" />
            <Path d="M10 134h6v6h-6zM16 134h5v6h-5zM21 134h5v6h-5z" />
            <Path d="M26 134h5v6h-5z" fill="#FFF" />
            <Path d="M31 134h5v6h-5z" />
            <Path d="M36 134h5v6h-5z" fill="#FFF" />
            <Path d="M41 134h6v6h-6zM47 134h5v6h-5zM52 134h5v6h-5z" />
            <Path d="M57 134h5v6h-5zM62 134h5v6h-5z" fill="#FFF" />
            <Path d="M67 134h5v6h-5zM72 134h6v6h-6zM78 134h5v6h-5zM83 134h5v6h-5z" />
            <Path d="M88 134h5v6h-5zM93 134h5v6h-5zM98 134h5v6h-5zM103 134h6v6h-6zM109 134h5v6h-5z" fill="#FFF" />
            <Path d="M114 134h5v6h-5zM119 134h5v6h-5zM124 134h5v6h-5zM129 134h5v6h-5z" />
            <Path d="M134 134h6v6h-6z" fill="#FFF" />
            <Path d="M140 134h5v6h-5z" />
            <Path d="M145 134h5v6h-5z" fill="#FFF" />
            <Path d="M0 140h5v5H0z" />
            <Path d="M5 140h5v5H5zM10 140h6v5h-6zM16 140h5v5h-5zM21 140h5v5h-5zM26 140h5v5h-5z" fill="#FFF" />
            <Path d="M31 140h5v5h-5z" />
            <Path d="M36 140h5v5h-5z" fill="#FFF" />
            <Path d="M41 140h6v5h-6zM47 140h5v5h-5zM52 140h5v5h-5z" />
            <Path d="M57 140h5v5h-5z" fill="#FFF" />
            <Path d="M62 140h5v5h-5zM67 140h5v5h-5z" />
            <Path d="M72 140h6v5h-6z" fill="#FFF" />
            <Path d="M78 140h5v5h-5z" />
            <Path d="M83 140h5v5h-5zM88 140h5v5h-5z" fill="#FFF" />
            <Path d="M93 140h5v5h-5zM98 140h5v5h-5zM103 140h6v5h-6zM109 140h5v5h-5z" />
            <Path d="M114 140h5v5h-5z" fill="#FFF" />
            <Path d="M119 140h5v5h-5zM124 140h5v5h-5z" />
            <Path d="M129 140h5v5h-5zM134 140h6v5h-6z" fill="#FFF" />
            <Path d="M140 140h5v5h-5z" />
            <Path d="M145 140h5v5h-5z" fill="#FFF" />
            <Path d="M0 145h5v5H0zM5 145h5v5H5zM10 145h6v5h-6zM16 145h5v5h-5zM21 145h5v5h-5zM26 145h5v5h-5zM31 145h5v5h-5z" />
            <Path d="M36 145h5v5h-5z" fill="#FFF" />
            <Path d="M41 145h6v5h-6z" />
            <Path d="M47 145h5v5h-5zM52 145h5v5h-5zM57 145h5v5h-5z" fill="#FFF" />
            <Path d="M62 145h5v5h-5z" />
            <Path d="M67 145h5v5h-5z" fill="#FFF" />
            <Path d="M72 145h6v5h-6z" />
            <Path d="M78 145h5v5h-5z" fill="#FFF" />
            <Path d="M83 145h5v5h-5zM88 145h5v5h-5zM93 145h5v5h-5z" />
            <Path d="M98 145h5v5h-5zM103 145h6v5h-6z" fill="#FFF" />
            <Path d="M109 145h5v5h-5zM114 145h5v5h-5z" />
            <Path d="M119 145h5v5h-5zM124 145h5v5h-5z" fill="#FFF" />
            <Path d="M129 145h5v5h-5zM134 145h6v5h-6z" />
            <Path d="M140 145h5v5h-5zM145 145h5v5h-5z" fill="#FFF" />
        </Svg>
    );
}
function IconWallet(props) {
    return (
        <Svg width={26} height={19} viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
        <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
        <Svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
function IconSetting(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
export { QrCode, IconWallet, IconProfile, IconSwap, IconSetting };
export default Logo;
