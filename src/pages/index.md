---
title: Smithy
description: Tools for building agenting workflows
---

# Smithy

A family of composable tools for building agenting workflows.

![smithy](/img/body.png)

### [MCPSmithy](https://iorubs.github.io/mcpsmithy/)

A lot of useful context lives in engineers' heads: how parts of a system relate, where things live, how to do common tasks. MCPSmithy is an easy way to expose that context, and the tools around it, to agents over MCP, defined in YAML instead of bespoke server code.

### [AgentSmithy](https://iorubs.github.io/agentsmithy/)

Most agents give you no control over the loop; you're at the mercy of the model to infer the next step, and decision making degrades as the context window grows. AgentSmithy is for building agenting flows with deterministic steps, so cheaper models can carry the workload too.

### [CLI](https://iorubs.github.io/smithy-cli/)

The engineer-friendly glue. Compose stacks of MCP servers and agents into a single declarative file, run them locally with one command, and share stacks with your team.

### Operator _(under construction)_

The same idea as the CLI, but for declarative agenting workloads on Kubernetes.


## Roadmap

High-level strategic initiatives that evolve the Smithy family beyond the current tools. These are larger efforts that may become sibling projects; they live here until those repos exist.

---

### Smithy Operator <span className="badge badge--secondary">In progress</span>

As the stack grows from context server → agents → model routing, deployment complexity grows with it. A Kubernetes operator is the natural unification layer; the config is already YAML and already CRD-shaped (`apiVersion`/`kind` patterns).

#### Vision

Each layer in the stack maps to a managed resource, with operational concerns like health checks, RBAC, and GitOps handled by the cluster rather than custom code. The operator is its own repo and binary; it consumes mcpsmithy and agentsmithy as the underlying runtimes. This only makes sense once the previous layers have traction and teams need multiple instances with different configs, agents, and model routing.

Repository: [smithy-operator](https://github.com/iorubs/smithy-operator).

#### Open Questions

- How much of the operator logic lives in the operator vs. in the underlying tools (mcpsmithy / agentsmithy) themselves?
- Should the operator manage model endpoints, or delegate to existing inference infrastructure?

---

### Template Registry <span className="badge badge--secondary">Exploring</span>

The Smithy tools today require whoever sets up a project to understand the platform; sources, conventions, structure, tool surfaces, agent kinds. A **template registry** externalizes that expertise: curated templates that anyone can pull to bootstrap a project or an agentic workload.

#### Vision

Templates serve two purposes: **project setup** (structure, sources, and conventions for a domain) and **agentic workloads** (tool surfaces, guardrails, and behavioral boundaries for agents). The same template that scaffolds a project defines how agents operate against it.

A registry lowers the floor beyond engineers; PMs, designers, and non-technical practitioners can start from something production-ready without understanding the underlying mechanics.

Evolution: curated examples in docs today → community templates in-repo → hosted versioned registry → base configs for operator CRDs.

#### Open Questions

- Who qualifies as a maintainer, and how are templates reviewed and versioned?
- Should templates be composable (base + overrides) or standalone?
- How does template drift get managed as frameworks and tooling evolve?
