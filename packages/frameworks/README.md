# Framework support catalog

`@khulnasoft-api/frameworks` is the canonical catalog of frameworks, runtimes, tools, services, and related logo variants supported by the repository.

Catalog membership does not imply a runtime adapter. Use `getFramework(id)` to inspect the record and `hasFrameworkAdapter(id)` to check whether an existing KhulnaSoft adapter is available. The initial adapter records are `express`, `hono`, and `next`.

Dark entries are visual variants linked to their light/base record through `baseId`. They do not represent separate runtime packages.
