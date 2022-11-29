# `datacheck` web app

This is a web app to accompany the R package. This is the final outcome of the NWO Open Science Fund project done together with the Meta-Research Center from Tilburg University.

## Project overview 

```mermaid
graph TD
  A[<a href='https://doi.org/10.31234/osf.io/ybzu9'>Privacy Protection in the Era of Open Science</a>] --> B[<a href='https://doi.org/10.53962/qj4h-2j1n'>Automatic Detection of Identifiers in Open Data - ADIODA</a>]
  B --> C[<a href='https://doi.org/10.53962/yp05-5fwc'>Simulating data with identifiable information</a>]
  B --> D[<a href='https://doi.org/10.53962/wz7c-s5wc'>Synthetic identifying information for 100,000 individuals: A pseudo-population</a>]
  C --> D
  B --> E[<a href='https://doi.org/10.53962/g9j4-v2gy'>Aggregate dataset of open data without identifying information</a>]
  D --> F[<a href='https://doi.org/10.53962/r5gg-jjv0'>Precision of detecting identifying information</a>]
  B --> G[<a href='https://doi.org/10.53962/hstd-cqpe'>URLs to open datasets hosted on the Open Science Framework</a>]
  E --> F
  F --> H[<a href='https://libscie.github.io/datacheck/index.html'>`datacheck` R package</a>]
  F --> I[<a href='https://libscie.github.io/datacheck-website/'>`datacheck` web app</a>]
```

## Screenshot

![](./screenshot.png)

## Development

```bash
npm install
npm run dev
```

