# File-Manager

## Instruction

In the compress and decompress tasks path_to_destination must contain file name.
Therefore, to verify that the data is saved after unpacking, enter the correct file format so that it can be opened.

For the rn, cp, mv, compress, decompress commands, if the name of any folder or file in any of the paths contains a space, for correct operation, you must enter the \0 characters before each path.

For example:

cp \0Some path with space \0SecondPathWitautSpace

mv \0SomePathWithautSpace \0Second path with spathe

compress \0Some path with space \0Second path with space

After the first path, you need to put one space, otherwise it may not work.

In the tasks cp mv add rn compress decompress checks if there is a file with the same name in the destination folder. If such a file already exists, a message will be displayed stating that the operation cannot be performed.
