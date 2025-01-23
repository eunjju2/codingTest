class Node {
    constructor(key,x){
        this.left = null;
        this.right = null;
        this.val = key;
        this.x = x;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(key,x){
        if(!this.root) {
            this.root = new Node(key, x);
        }else {
            let curr = this.root;
            while(true) {
                if(x < curr.x){
                    if(curr.left){
                        curr = curr.left;
                    }else{
                        curr.left = new Node(key, x);
                        break;
                    }
                }else {
                    if(curr.right){
                        curr = curr.right;
                    }else {
                        curr.right = new Node(key, x);
                        break;
                    }
                }
            }
        }
    }
}

function preorder(node, ans) {
    if(node === null) return;
    ans.push(node.val);
    preorder(node.left,ans);
    preorder(node.right,ans);
}

function postorder(node, ans) {
    if(node === null) return;
    postorder(node.left,ans);
    postorder(node.right,ans);
    ans.push(node.val);
}


function solution(nodeinfo) {
    const sortNode = nodeinfo.map((v, idx) => [idx+1, v]).sort((a,b) => b[1][1]-a[1][1]);
    
    const bst = new BST();
    
    for(const node of sortNode) {
        const [key, pos] = node;
        const [x,y] = pos;
        
        bst.insert(key, x);
    }
    
    let preArr = [];
    preorder(bst.root, preArr);
    
    let postArr = [];
    postorder(bst.root, postArr);
    

    return [preArr, postArr];
}

