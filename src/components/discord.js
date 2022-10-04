import { Helmet } from "react-helmet"

export default function Component() {
  return (
    <>
      <Helmet>
      <widgetbot
    server="692392095154962463"
    channel="1021560426363879535"

    ></widgetbot>
    <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"></script>

      </Helmet>
      ...
    </>
  )
}

/*
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
const crate = new Crate({
    server: '692392095154962463', // WorkOutBuddy
    channel: '1021560426363879535' // #public
})
</script>
*/

/*
<script src='https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' async defer>
new Crate({
    server: '692392095154962463', // WorkOutBuddy
    channel: '1021560426363879535' // #public
})
</script>
*/