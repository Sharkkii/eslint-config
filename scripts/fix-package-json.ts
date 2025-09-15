import packageJsonCli from "@npmcli/package-json";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fixPackageJson = async () => {
  const packageRootDirectory = path.join(__dirname, "..");
  const pkg = await packageJsonCli.load(packageRootDirectory);
  await pkg.fix();
  // @ts-expect-error - incorrect type definition in @npmcli/package-json
  await pkg.save({ sort: true });
};

await fixPackageJson();
