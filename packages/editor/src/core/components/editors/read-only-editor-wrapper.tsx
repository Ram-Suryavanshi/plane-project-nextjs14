// components
import { EditorContainer, EditorContentWrapper } from "@/components/editors";
// helpers
import { getEditorClassNames } from "@/helpers/common";
// hooks
import { useReadOnlyEditor } from "@/hooks/use-read-only-editor";
// types
import { IReadOnlyEditorProps } from "@/types";

export const ReadOnlyEditorWrapper = (props: IReadOnlyEditorProps) => {
  const { containerClassName, editorClassName = "", id, initialValue, forwardedRef, mentionHandler } = props;

  const editor = useReadOnlyEditor({
    initialValue,
    editorClassName,
    forwardedRef,
    mentionHandler,
  });

  const editorContainerClassName = getEditorClassNames({
    containerClassName,
  });

  if (!editor) return null;

  return (
    <EditorContainer editor={editor} editorContainerClassName={editorContainerClassName} id={id}>
      <div className="flex flex-col">
        <EditorContentWrapper editor={editor} id={id} />
      </div>
    </EditorContainer>
  );
};
