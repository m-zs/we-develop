---
title: Blog Post 1
---

To _see_ the answers, we need to take a step back. The goal of this article isn’t to give you a list of bullet point recipes. It’s to help you truly “grok” `useEffect`. There won’t be much to learn. In fact, we’ll spend most of our time *un*learning.

**It’s only after I stopped looking at the `useEffect` Hook through the prism of the familiar class lifecycle methods that everything came together for me.**

> “Unlearn what you have learned.” — Yoda

---

**This article assumes that you’re somewhat familiar with [`useEffect`](https://reactjs.org/docs/hooks-effect.html) API.**

**It’s also _really_ long. It’s like a mini-book. That’s just my preferred format. But I wrote a TLDR just below if you’re in a rush or don’t really care.**

**If you’re not comfortable with deep dives, you might want to wait until these explanations appear elsewhere. Just like when React came out in 2013, it will take some time for people to recognize a different mental model and teach it.**

---

## TLDR

Here’s a quick TLDR if you don’t want to read the whole thing. If some parts don’t make sense, you can scroll down until you find something related.

Feel free to skip it if you plan to read the whole post. I’ll link to it at the end.

**🤔 Question: How do I replicate `componentDidMount` with `useEffect`?**

While you can `useEffect(fn, [])`, it’s not an exact equivalent. Unlike `componentDidMount`, it will _capture_ props and state. So even inside the callbacks, you’ll see the initial props and state. If you want to see “latest” something, you can write it to a ref. But there’s usually a simpler way to structure the code so that you don’t have to. Keep in mind that the mental model for effects is different from `componentDidMount` and other lifecycles, and trying to find their exact equivalents may confuse you more than help. To get productive, you need to “think in effects”, and their mental model is closer to implementing synchronization than to responding to lifecycle events.

**🤔 Question: How do I correctly fetch data inside `useEffect`? What is `[]`?**

[This article](https://www.robinwieruch.de/react-hooks-fetch-data/) is a good primer on data fetching with `useEffect`. Make sure to read it to the end! It’s not as long as this one. `[]` means the effect doesn’t use any value that participates in React data flow, and is for that reason safe to apply once. It is also a common source of bugs when the value actually _is_ used. You’ll need to learn a few strategies (primarily `useReducer` and `useCallback`) that can _remove the need_ for a dependency instead of incorrectly omitting it.

**🤔 Question: Do I need to specify functions as effect dependencies or not?**

The recommendation is to hoist functions that don’t need props or state _outside_ of your component, and pull the ones that are used only by an effect _inside_ of that effect. If after that your effect still ends up using functions in the render scope (including function from props), wrap them into `useCallback` where they’re defined, and repeat the process. Why does it matter? Functions can “see” values from props and state — so they participate in the data flow. There's a [more detailed answer](https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies) in our FAQ.

**🤔 Question: Why do I sometimes get an infinite refetching loop?**

This can happen if you’re doing data fetching in an effect without the second dependencies argument. Without it, effects run after every render — and setting the state will trigger the effects again. An infinite loop may also happen if you specify a value that _always_ changes in the dependency array. You can tell which one by removing them one by one. However, removing a dependency you use (or blindly specifying `[]`) is usually the wrong fix. Instead, fix the problem at its source. For example, functions can cause this problem, and putting them inside effects, hoisting them out, or wrapping them with `useCallback` helps. To avoid recreating objects, `useMemo` can serve a similar purpose.

**🤔 Why do I sometimes get an old state or prop value inside my effect?**

Effects always “see” props and state from the render they were defined in. That [helps prevent bugs](/how-are-function-components-different-from-classes/) but in some cases can be annoying. For those cases, you can explicitly maintain some value in a mutable ref (the linked article explains it at the end). If you think you’re seeing some props or state from an old render but don’t expect it, you probably missed some dependencies. Try using the [lint rule](https://github.com/facebook/react/issues/14920) to train yourself to see them. A few days, and it’ll be like a second nature to you. See also [this answer](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function) in our FAQ.

---

I hope this TLDR was helpful! Otherwise, let’s go.

---

## Each Render Has Its Own Props and State

Before we can talk about effects, we need to talk about rendering.

Here’s a counter. Look at the highlighted line closely:

```jsx{6}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
