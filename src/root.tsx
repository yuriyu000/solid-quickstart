// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Redirecting...</Title>
        <Meta charset="utf-8" />
       <meta http-equiv="refresh" content="0;URL='https://yu-sflabo.booth.pm/'" />
      </Head>
      <Body>
      </Body>
    </Html>
  );
}
