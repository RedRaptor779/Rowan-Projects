#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;
class IntBinaryTree
{
    private:
    // The TreeNode struct is used to build the tree.
    struct TreeNode
    {
    int value;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int value1,
        TreeNode *left1 = nullptr,
        TreeNode *right1 = nullptr)
    {
        value = value1;
        left = left1;
        right = right1;
    }
    };
    TreeNode *root; // Pointer to the root of the tree
    //**************************************************
    // This version of insert inserts a number into *
    // a given subtree of the main binary search tree. *
    //**************************************************
    void insert(TreeNode * &tree, int num)
    {
        // If the tree is empty, make a new node and make it
        // the root of the tree. We are passing the node pointer by
        // reference so that if it is replaced like below, the
        // change will also impact the incoming argument.
        if (!tree)
        {
        tree = new TreeNode(num);
            return; //Terminate the function
        }
        // If num is already in tree: return.
        if (tree->value == num)
            return;
        // The tree is not empty: insert the new node into the
        // left or right subtree.
        if (num < tree->value)
            insert(tree->left, num);
        else
            insert(tree->right, num);
    }
    //***************************************************
    // destroySubTree is called by the destructor. It *
    // deletes all nodes in the tree. *
    //***************************************************
    void destroySubtree(TreeNode *tree)
    {
        if (!tree) return;
        destroySubtree(tree->left);
        destroySubtree(tree->right);
        // Delete the node at the root.
        delete tree;
    }
    //********************************************
    // remove deletes the node in the given tree *
    // that has a value member the same as num. *
    //********************************************
    void remove(TreeNode *&tree, int num)
    {
        if (tree == nullptr) return;
        if (num < tree->value)
            remove(tree->left, num);
        else if (num > tree->value)
            remove(tree->right, num);
        else
            // We have found the node to delete.
            makeDeletion(tree);
    }
    //***********************************************************
    // makeDeletion takes a reference to a tree whose root *
    // is to be deleted. If the tree has a single child, the *
    // the tree is replaced by the single child after the *
    // removal of its root node. If the tree has two children *
    // the left subtree of the deleted node is attached at *
    // an appropriate point in the right subtree, and then *
    // the right subtree replaces the original tree. *
    //***********************************************************
    void makeDeletion(TreeNode *&tree)
    {
        // Used to hold node that will be deleted.
        TreeNode *nodeToDelete = tree;
        // Used to locate the point where the
        // left subtree is attached.
        TreeNode *attachPoint;
        if (tree->right == nullptr)
        {
            // Replace tree with its left subtree.
            tree = tree->left;
        }
        else if (tree->left == nullptr)
        {
            // Replace tree with its right subtree.
            tree = tree->right;
        }
        else
        //The node has two children
        {
            // Move to right subtree.
            attachPoint = tree->right;
            // Locate the smallest node in the right subtree
            // by moving as far to the left as possible.
            while (attachPoint->left != nullptr)
            attachPoint = attachPoint->left;
            // Attach the left subtree of the original tree
            // as the left subtree of the smallest node
            // in the right subtree.
            attachPoint->left = tree->left;
            // Replace the original tree with its right subtree.
            tree = tree->right;
        }
        // Delete root of original tree
        delete nodeToDelete;
    }
    //*********************************************************
    // This function displays the values stored in a tree *
    // in inorder. *
    //*********************************************************
    void displayInOrder(TreeNode *tree) const
    {
        if (tree)
        {
            displayInOrder(tree->left);
            cout << tree->value << " ";
            displayInOrder(tree->right);
        }
    }
    //*********************************************************
    // This function displays the values stored in a tree *
    // in inorder. *
    //*********************************************************
    void displayPreOrder(TreeNode *tree) const
    {
        if (tree)
        {
            cout << tree->value << " ";
            displayPreOrder(tree->left);
            displayPreOrder(tree->right);
        }
    }
    //*********************************************************
    // This function displays the values stored in a tree *
    // in postorder. *
    //*********************************************************
    void displayPostOrder(TreeNode *tree) const
    {
        if (tree)
        {
            displayPostOrder(tree->left);
            displayPostOrder(tree->right);
            cout << tree->value << " ";
        }
    }

    void printLN (TreeNode *tree) const
    {
        if (tree)
        {
            printLN(tree->left);
            printLN(tree->right);
            if (tree->left == nullptr && tree->right == nullptr){
                cout << tree->value << " ";
            }
        }
    }
    public:
    // These member functions are the public interface.
    IntBinaryTree() // Constructor
    {
        root = nullptr;
    }
    ~IntBinaryTree() // Destructor
    {
        destroySubtree(root);
    }
    void insert(int num)
    {
        insert(root, num);
    }
    void remove(int num)
    {
        remove(root, num);
    }
    void showInOrder(void) const
    {
        displayInOrder(root);
    }
    void showPreOrder() const
    {
        displayPreOrder(root);
    }
    void showPostOrder() const
    {
        displayPostOrder(root);
    }
    void printLeafNodes (){
        printLN(root);
    }
    //***************************************************
    // searchNode determines if a value is present in *
    // the tree. If so, the function returns true. *
    // Otherwise, it returns false. *
    //***************************************************
    bool search(int num) const
    {
        TreeNode *tree = root;
        while (tree)
        {
            if (tree->value == num)
            return true;
            else if (num < tree->value)
            tree = tree->left;
            else
            tree = tree->right;
        }
        return false;
    }
};

int main() {
    IntBinaryTree tree;
    

    //prompt and open file
    string filename;
    
    cout << "Enter the name of input file: \n";
    cin >> filename;

    cout << "Opening input file...\n";

    ifstream myfile; //generate file obj and open it
    myfile.open(filename);

    cout << "Inserting values into binary tree...\n";

    int it = 0;
    int current;
    vector<int> values;
    while (!myfile.eof()){
        myfile >> current;
        values.push_back(current);
        it++;
    }
    //Populate Tree
    for(int val : values)
        tree.insert(val);

    cout << "Print In-Order: ";
    tree.showInOrder();
    cout << "\n\nPrint Pre-Order: ";
    tree.showPreOrder();
    cout << "\n\nPrint Post-Order: ";
    tree.showPostOrder();
    cout << "\n\nPrint Leaf Nodes: ";
    tree.printLeafNodes();
    return 0;
}
