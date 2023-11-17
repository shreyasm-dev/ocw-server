# ocw-server

A server for MIT OpenCourseWare content

## Installation

1. Install [Deno](https://deno.com)
2. Clone this repository
3. Make this function available by adding the following to your `.bashrc` or `.zshrc`:

```bash
ocw() {
  (cd /path/to/repo && deno task $@)
}
```

4. Run `ocw index` once to create the `public/index.html` file (even if you haven't downloaded any courses yet)
5. Run `ocw start` to start the server

You can also run `ocw` to see a list of available commands.

## Downloading Courses

Run `ocw download <course id>` to download a course. For example, if the course URL were `https://ocw.mit.edu/courses/16-00-introduction-to-aerospace-engineering-and-design-spring-2003/`, the ID would be `16-00-introduction-to-aerospace-engineering-and-design-spring-2003`. This will download it to the public folder.

After the course downloads, run `ocw index` to index the courses and update `public/index.html`. You can now run `ocw start` to start the server and view the course (you might need to hard refresh the page or clear your cache for it to updateƒ).

## Commands

- `start`: Starts the server
- `download <course id>`: Downloads a course
- `index`: Indexes all courses
