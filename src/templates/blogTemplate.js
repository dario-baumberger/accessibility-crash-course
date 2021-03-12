import React from "react";
import { graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container m-auto mt-20">
        <div className="mb-40 mx-auto max-w-screen-lg">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <footer class="bg-green-700 text-white fixed left-0 right-0 bottom-0 h-20 flex justify-center items-center">
        <div class="absolute left-0 right-0 bottom-0 h-20 flex justify-between items-center text-white">
          <a
            href="<%- config.base %>/<%- lang %>/presentation/<%- name %>/<%- prev %>"
            class="p-6"
          >
            Prev
          </a>
          <a
            href="<%- config.base %>/<%- lang %>/presentation/<%- name %>/<%- next %>"
            class="p-6"
          >
            Next
          </a>
        </div>
        <p class="text-center">
          <small>Accessibility / Barrierefreiheit</small>
        </p>
      </footer>
    </main>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
