---
title: Dev, SRE, Operations, DevOps - What’s the Difference?
author: Tianzhou
published_at: 2022/07/15 08:00:00
feature_image: /static/blog/dev-sre-ops-devops-difference/dev-sre-ops.webp
tags: Education
description: Explain and address the confusion between Developer (Dev), Site Reliability Engineer (SRE), (Operations) Ops and DevOps.
---

Developers (Dev), Site Reliability Engineer (SRE), and Operations (Ops) are job types, while DevOps is a system. If we take a soccer analogy, Dev, SRE, and Ops correspond to positions like forward, midfield, and back, while DevOps is a formation like [4-3-3](<https://en.wikipedia.org/wiki/Formation_(association_football)#4%E2%80%933%E2%80%933>).

## Dev

Also called Development Engineer, Software Engineer (SWE), Software Developer, or simply Developer (Dev). Their main responsibility is to write code and implement software business logic. The logic could be fulfilling a grocery order, scheduling a cab to your place and etc. Developers mostly deal with the code.

## Ops

Also called IT Operations, Production Engineer (PE), or simply Operations (Ops). They are responsible for data center management, machine installation, network wiring, monitoring, and alerting. In the early days, a large amount of the operations’ work is to deal with physical equipment. This work requires a lot of manual intervention and is risky. In the last 10 years, as Cloud services gradually replace the physical data center, the traditional operations workload has been significantly reduced, and the pure Ops job ceases to exist.

_Veterans all remember the exciting days of carrying such a pager to be standby 7x24_

![dev-sre-ops-intersection](/static/blog/dev-sre-ops-devops-difference/pager.webp)

## SRE

Site Reliability Engineer (SRE), coined by Google in 2003. The following factors contribute to the birth of this role:

1. Large-scale online services like Google are complex and require high service stability.
1. Developers are usually more concerned about delivering software, but less interested in the ongoing maintenance after launch. Moreover, in order to launch the feature sooner, Developers are inclined to ignore the maintenance aspect of the software. This is mostly represented by Facebook’s infamous motto ["Move fast and break things"](https://en.wikipedia.org/wiki/Meta_Platforms#History).
1. Traditional Operations need to transition to a new role.

1 and 2 prompted the need for a specialized job function, of which 2 also serves to balance the development pace (please do not break that much), while 3 provides the labor supply for SRE. Since SRE’s main responsibility is to ensure service stability, it’s a natural transition for Operations to move into an SRE role.

Simply put, SRE is an upgraded version of traditional Operations. SRE differs from Operations in the following ways:

1. SRE no longer deals with physical equipment which is taken care of by the cloud services.
1. Employs a more systematic approach to ensure service stability, such as building automation tools, and working with the development team together to develop [Service Level Objective (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) / [Service Level Agreement (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) / [Service Level Indicator (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator). This triplet serves as the contract between SREs and Developers to work towards a shared goal of providing a better service.
1. Stronger engineering background. Some SREs possess quite strong engineering skills. For example, the creator of the monitoring software [Prometheus](https://prometheus.io/) was an SRE at Google.

![dev-sre-ops-intersection](/static/blog/dev-sre-ops-devops-difference/dev-sre-ops.webp)

The above diagram depicts the boundary between Dev, SRE, and Ops. There is basically no intersection between Dev and Ops, while SRE, as mentioned earlier, is Ops with Dev skillset, but still a bit more on the Ops side.

## DevOps

DevOps is a system. As just mentioned, there is no intersection between Dev and Ops work, while DevOps is to combine these two work types together. More precisely, DevOps is to let Dev take on the Ops work. Under DevOps, there is no traditional Ops role, and the Ops responsibility may be shared by Dev and SRE, or the work may be carried out by Dev alone. This further eliminates the SRE role.

## Why People Get Confused

1. Confused about the difference between SRE and Ops. Simply put, SRE is Ops who can code.
1. Confused about whether DevOps is a system or a job function. This depends on the context. Initially, DevOps represented the system combining Dev and Ops work. This system may have both Dev and SRE roles, or it may only have a Dev role. When the system only has a Dev role, the system name, DevOps, is also used to indicate the job function, the so-called DevOps engineer. After all, if a soccer formation blurs the boundaries of the forward, midfield, and back, the formation will become a free formation, and all players can be called free men.
1. Confused about the difference between DevOps and SRE when DevOps is treated as a job function. Simply put, DevOps is the Dev that does Ops work, while SRE is the Ops that does Dev work.
