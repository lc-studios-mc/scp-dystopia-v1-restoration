# SCP: Dystopia v1 restoration

The SCP: Dystopia addon v1 (2021~2023) has been obliterated by recent Minecraft updates.
This repository is for restoring it. 🛠️

Once the restoration is complete, I will merge the restored features into the [main repository](https://github.com/lc-studios-mc/scp-dystopia).

I've made several attempts to remake the SCP: Dystopia addon before, but none have achieved the goal of full restoration.

With my experiences from [SCP: Dystopia Redefined](https://mcpedl.com/scp-dystopia-redefined/) and [recent alpha iterations](https://github.com/lc-studios-mc/scp-dystopia),
I can say that focusing on restoring old features while adding new *polished* features is quite difficult.

## The Goal

The goal here is to **restore features from v1**.

A list of thoughts that I hope will lead me in the right direction:

- Write features from scratch.
  - Old code from v1 is such a mess that I simply can't accept.
  - I learned a lot since when I released v1.
- Keep code simple and easy to expand.
  - Avoid focusing on complex behavior at early stage.
  - "Easy to expand" means I should not be having to rewrite it when I want to extend its functionality.
- Avoid restoring something bad.
- Avoid improving front end (textures, 3D models, audio, etc.) until I'm ready to.
  - I want to focus on creating a good architecture first.
  - I can always do this later.
- Avoid adding new features unless it is required.
- Avoid writing behavior pack scripts if same thing can be done easily in traditional JSON.
- Inside scripts, wrap Beta API calls with helper functions.
  - So it's easier to fix when there's a new Minecraft update.

## Other Information

For bug reports, suggestions, etc., please use [GitHub Issues](https://github.com/lc-studios-mc/scp-dystopia-v1-restoration/issues).

Contact: info@lc-studios.net
