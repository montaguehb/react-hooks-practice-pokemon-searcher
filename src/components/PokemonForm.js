import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newPokemon}) {
  const [form, setForm] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  const handleSubmit = () => {
    (async ()=>{
      const post = await fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      const data = await post.json()
      newPokemon(data)
    })()
  }

  const handleForm = ({target: {id, value}}) => {
    if(id === "front" || id === "back") setForm({...form, sprites: {...form.sprites, [id]: value}})
    else setForm({...form, [id]: value})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" id="name" value={form.name} onChange={handleForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" id="hp" value={form.hp} onChange={handleForm}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            id="front"
            value={form.sprites.front}
            onChange={handleForm}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            id="back"
            value={form.sprites.back}
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
