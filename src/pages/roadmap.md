---
title: Roadmap
description: Future initiatives across the Smithy family
hide_table_of_contents: false
---

# Roadmap

High-level strategic initiatives that evolve the Smithy family beyond the current tools. These are larger efforts that may become sibling projects; they live here until those repos exist.

---

## Smithy Operator <span className="badge badge--secondary">In progress</span>

As the stack grows from context server → agents → model routing, deployment complexity grows with it. A Kubernetes operator is the natural unification layer; the config is already YAML and already CRD-shaped (`apiVersion`/`kind` patterns).

### Vision

Each layer in the stack maps to a managed resource, with operational concerns like health checks, RBAC, and GitOps handled by the cluster rather than custom code. The operator is its own repo and binary; it consumes mcpsmithy and agentsmithy as the underlying runtimes. This only makes sense once the previous layers have traction and teams need multiple instances with different configs, agents, and model routing.

Repository: [smithy-operator](https://github.com/iorubs/smithy-operator).

### Open Questions

- How much of the operator logic lives in the operator vs. in the underlying tools (mcpsmithy / agentsmithy) themselves?
- Should the operator manage model endpoints, or delegate to existing inference infrastructure?

---

## Specialized Model Routing <span className="badge badge--secondary">Exploring</span>

Most of what makes frontier models expensive is compensating for lack of context. With the right conventions, code patterns, and docs injected at the right time, smaller models can perform nearly as well on domain-specific tasks. mcpsmithy is already building that context layer; model routing is the efficiency payoff.

### Vision

Route tasks to the right model based on complexity: routine work goes to fast, cheap models; architecture and complex refactoring go to frontier models. Routing rules would be config-driven and project-specific. This could live inside the agent layer or as a standalone sibling service; the right answer depends on how the agent layer evolves.

### Open Questions

- Sibling service or integrated into the agent layer?
- How to define task complexity thresholds for routing decisions?
- How to measure whether a cheaper model's output is "good enough" for a given task?

---

## Template Registry <span className="badge badge--secondary">Exploring</span>

The Smithy tools today require whoever sets up a project to understand the platform; sources, conventions, structure, tool surfaces, agent kinds. A **template registry** externalizes that expertise: curated templates that anyone can pull to bootstrap a project or an agentic workload.

### Vision

Templates serve two purposes: **project setup** (structure, sources, and conventions for a domain) and **agentic workloads** (tool surfaces, guardrails, and behavioral boundaries for agents). The same template that scaffolds a project defines how agents operate against it.

A registry lowers the floor beyond engineers; PMs, designers, and non-technical practitioners can start from something production-ready without understanding the underlying mechanics.

Evolution: curated examples in docs today → community templates in-repo → hosted versioned registry → base configs for operator CRDs.

### Open Questions

- Who qualifies as a maintainer, and how are templates reviewed and versioned?
- Should templates be composable (base + overrides) or standalone?
- How does template drift get managed as frameworks and tooling evolve?
