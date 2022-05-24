import styles from './App.module.css';
import Dialog from './Components/Dialog/Dialog';
import Button from './Components/Button/Button';

function App() {
  return (
    <div>
      <main className={styles.main}>
        <Dialog
          variant="error"
          title="Error"
          description="Something went wrong"
        >
          <Button variant="solid" text="Error Dialog" />
        </Dialog>
        <Dialog
          variant="warning"
          title="Warning"
          description="Please try again"
        >
          <Button variant="solid" text="Warning Dialog" />
        </Dialog>
        <Dialog
          variant="success"
          title="Hurray!!"
          description="Form submitted successfully"
        >
          <Button variant="solid" text="Success Dialog" />
        </Dialog>
      </main>
    </div>
  );
}

export default App;
