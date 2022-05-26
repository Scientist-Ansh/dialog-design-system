# React Dialogs

Simple dialog components to inform user of differt types of alerts.

## Usage
- Firstly, import the Dialog Component, then use the component as shown below.
```
<Dialog
  variant="error"
  title="Error"
  description="Something went wrong"
>
  <Button variant="solid" text="Error Dialog" />
</Dialog>
```
The design of the Dialog can be referred [here](https://www.figma.com/file/ETSvclvkfXzUIJjkufXRJ9/front_explorer?node-id=98%3A14530).

## API/Component

### Dialog Component

| Prop Name     | Type                              | Description     |
| ------------- | -------------                      | -------- |
| variant        | 'error','success','warning'       | Describes the type Dialog(icon and the buttons on the dialog)   |
| title           | string                          | The title displayed in the dialog  |
| description     | string                          | The description displayed in the dialog  |
| onClose    | func                       | Callback fired when user requests to close the dialog , Signature: `function=()=>void` |
| onConfirm    | func                       | Callback fired when user confirms to the dialog , Signature: `function=()=>void`  |
| show           | boolean                      | Overrides the default `false` value of show.  |
| children          | node                     | The content displayed when the show is `false`  |


## Installation


```shell
    # Clone or install commands
    git clone https://github.com/Scientist-Ansh/dialog-design-system.git
    cd dialog-design-system
    npm install
    npm start
```

## License 

Open source
[MIT](https://opensource.org/licenses/MIT)

