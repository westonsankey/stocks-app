import { Container } from "inversify";
import * as Services from "../services";
import { Context } from "../graphql";

const container = new Container({ skipBaseClassChecks: true });
Services.bind(container);
Context.bind(container);

export { container };
