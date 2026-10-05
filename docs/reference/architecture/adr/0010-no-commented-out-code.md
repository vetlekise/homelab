# 0010. Remove code instead of commenting it out

## Status

Accepted

## Date

2026-10-05

## Context

Commented-out code is dead weight. It goes stale, confuses readers about what is actually in use, and shows up in searches. Git already keeps the full history, so nothing is lost when code is deleted.

## Decision

Delete unused code completely. Do not comment it out, rename it to `.bak` or `.old`, or hide it behind always-false conditions to "keep it around".

Comments are only for documentation: explaining intent, constraints, workarounds, or anything the code cannot show on its own. To bring removed code back, use git history.

## Consequences

- Files stay smaller and show only what is actually deployed or executed.
- Old code is recovered through git history, which relies on clear commits (see [ADR-0007](0007-conventional-commits.md)).
- Temporary local experiments are fine, but must be removed before committing.
