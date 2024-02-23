### To Reproduce

1. Install dependencies `npm i` or `pnpm i`
2. Run the dev server `npm run dev` or `pnpm run dev`
3. Confirm that pagination is working
4. Click on `Edit` button on any user in table to open second page side by side
5. Test pagination again (not working)

### Current vs. Expected behavior

Following the steps from previous section, I expected for pagination to work, but it didn't. After updating the URL with new search params with parallel route nothing happens but it should fetch new data based on `current_page` search param.

### Provide environment information

```bash
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 23.3.0: Wed Dec 20 21:31:00 PST 2023; root:xnu-10002.81.5~7/RELEASE_ARM64_T6020
Binaries:
  Node: 20.10.0
  npm: 10.4.0
  Yarn: N/A
  pnpm: 8.15.3
Relevant Packages:
  next: 14.1.0
  eslint-config-next: N/A
  react: 18.2.0
  react-dom: 18.2.0
  typescript: 5.3.3
Next.js Config:
  output: N/A
```


### Which area(s) are affected?

App Router, Routing (next/router, next/navigation, next/link)

### Which stage(s) are affected?

next dev (local), next build (local), next start (local)
